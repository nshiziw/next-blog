"use client";

import React from "react";
import { ReactNotifications, Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const Page: React.FC = () => {
    const handleNotification = () => {
        Store.addNotification({
            title: "Success!",
            message: "Notification triggered successfully!",
            type: "warning",
            insert: "top",
            container: "top-full",
            dismiss: {
                duration: 5000,
                // onScreen: true,
            },
        });
    };

    return (
        <div>
        <ReactNotifications />
        <p>This is the login page</p>
        <button onClick={handleNotification}>Show toast</button>
        </div>
    );
};

export default Page;
