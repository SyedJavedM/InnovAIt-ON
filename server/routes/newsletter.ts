import express from 'express';
import { Subscriber } from '../models/Subscriber';
import nodemailer from 'nodemailer';

const router = express.Router();

// Create email transporter with secure configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log('Transporter verification error:', error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

// Subscribe to newsletter
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;

    // Check if subscriber already exists
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    // Create new subscriber
    const subscriber = new Subscriber({ name, email });
    await subscriber.save();

    res.status(201).json({ message: 'Successfully subscribed to newsletter' });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ message: 'Error subscribing to newsletter' });
  }
});

// Send newsletter to all subscribers
router.post('/send', async (req, res) => {
  try {
    const { subject, content } = req.body;
    
    // Log email configuration (without password)
    console.log('Email configuration:', {
      user: process.env.EMAIL_USER,
      host: 'smtp.gmail.com',
      port: 587
    });

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Email credentials not configured');
    }

    const subscribers = await Subscriber.find({});
    console.log(`Found ${subscribers.length} subscribers to send to`);

    // Send email to each subscriber
    const emailPromises = subscribers.map(async (subscriber) => {
      try {
        const mailOptions = {
          from: `"Newsletter" <${process.env.EMAIL_USER}>`,
          to: subscriber.email,
          subject,
          html: content,
        };

        console.log(`Attempting to send email to: ${subscriber.email}`);
        const info = await transporter.sendMail(mailOptions);
        console.log(`Email sent successfully to ${subscriber.email}:`, info.messageId);
        return info;
      } catch (error) {
        console.error(`Error sending to ${subscriber.email}:`, error);
        throw error;
      }
    });

    const results = await Promise.allSettled(emailPromises);
    const successful = results.filter(r => r.status === 'fulfilled').length;
    const failed = results.filter(r => r.status === 'rejected').length;

    console.log(`Newsletter sending complete. Successful: ${successful}, Failed: ${failed}`);

    if (failed > 0) {
      return res.status(207).json({ 
        message: 'Newsletter sent with some failures',
        successful,
        failed
      });
    }

    res.json({ 
      message: 'Newsletter sent successfully',
      successful,
      failed: 0
    });
  } catch (error: any) {
    console.error('Newsletter sending error:', error);
    res.status(500).json({ 
      message: 'Error sending newsletter',
      error: error?.message || 'Unknown error occurred'
    });
  }
});

// Get all subscribers (admin only)
router.get('/subscribers', async (req, res) => {
  try {
    const subscribers = await Subscriber.find({});
    res.json(subscribers);
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    res.status(500).json({ message: 'Error fetching subscribers' });
  }
});

export const newsletterRouter = router; 