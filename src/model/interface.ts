import { NextFunction } from "express";

export interface MailConfig {
    host: 'smtp.163.com',
    port: 465,
    secure: true,
    auth: {
        user: 'youthschina@163.com',
        pass: ''
    }
}

export interface MailOption {
    from: 'youthschina@163.com',
    to: 'mailOptions',
    text: 'yes'
}

export type MailRequest = { config: MailConfig, option: MailOption };
