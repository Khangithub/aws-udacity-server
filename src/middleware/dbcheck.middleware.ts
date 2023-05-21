import { NextFunction, Request, Response } from "express";
import { pool } from "../db/pool.db";

export const createDatabaseAndTable = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Check if 'udacity' database exists
        const databaseResult = await pool.query(
            "SELECT datname FROM pg_catalog.pg_database WHERE datname = 'udacity'"
        );

        if (databaseResult.rows.length === 0) {
            // Create 'udacity' database if it doesn't exist
            await pool.query('CREATE DATABASE udacity');
            console.log('Created database: udacity');
        }

        // Check if 'contact' table exists in 'udacity' database
        const tableResult = await pool.query(
            "SELECT table_name FROM information_schema.tables WHERE table_name = 'contact'"
        );

        if (tableResult.rows.length === 0) {
            // Create 'contact' table with the specified schema
            await pool.query(`
          CREATE TABLE "contact" (
            id SERIAL PRIMARY KEY,
            firstName VARCHAR(50),
            lastName VARCHAR(50),
            phone VARCHAR(20)
          )
        `);
            console.log('Created table: contact');
        }

        next()
    } catch (error: any) {
        console.error(error.message);
        res.status(500).json({
            success: false,
            message: error.message || 'dbcheck failed'
        });
    }
};
