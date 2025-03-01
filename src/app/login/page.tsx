"use client";

import React from "react";
import { Store } from "react-notifications-component";

const Page: React.FC = () => {
    const handleNotification = () => {
        Store.addNotification({
            title: "Success!",
            message: "Notification triggered successfully!",
            type: "warning",
            insert: "top",
            container: "bottom-full",
            dismiss: {
                duration: 5000,
                // onScreen: true,
            },
        });
    };

    return (
        <div>
        
        <p>This is the login page</p>
        <button onClick={handleNotification}>Show toast</button>
        </div>
    );
};

export default Page;
