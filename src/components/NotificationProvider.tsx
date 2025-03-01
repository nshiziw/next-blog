// src/components/NotificationProvider.tsx
"use client";

import React from "react";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

export default function NotificationProvider() {
  return <ReactNotifications />;
}
