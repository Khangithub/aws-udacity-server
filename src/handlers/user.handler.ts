import { Request, Response } from 'express';

import { User } from '../models/user.model';
import { pool } from '../db/pool.db';

export const createUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const {
      firstName,
      lastName,
      phone,
    }: User = req.body;

    // Insert the new user into the database
    const query = 'INSERT INTO "contact" (firstName, lastName, phone) VALUES ($1, $2, $3) RETURNING *;'

    const values = [firstName, lastName, phone];
    const { rows } = await pool.query(query, values);


    res.status(201).json({ success: true, data: rows });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({
      success: false,
      message: err.message || 'user.handler create user failed'
    });
  }
};

export const fetchAll = async (req: Request, res: Response): Promise<any> => {
  try {
    const query = 'SELECT * FROM contact';
    const { rows } = await pool.query(query);

    // Return the token
    return res.status(200).json({ success: true, data: rows });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({
      success: false,
      message: err.message || 'user.handler fetchAll failed'
    });
  }
}