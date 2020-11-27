interface IMessage {
    to: {
        name: string;
        email: string;
    };
    from: {
        name: string;
        email: string;
    };
    subject: string;
    body: string;
}

export interface IMailProvider {
    sendMail(message: IMessage): Promise<void>;
}
