'use client'

import React, { useState, useEffect } from 'react';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogFooter,
    AlertDialogCancel,
} from "@/components/ui/alert-dialog"

export function MobileBlocker() {
    const [showDialog, setShowDialog] = useState(false);
    const [message, setMessage] = useState('');
    const [headerMessage, setHeaderMessage] = useState('');

    useEffect(() => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        // Check if the app is running in standalone mode

        if (isMobile) {
            // Detect mobile browser
            setMessage('Sorry, this app is desktop only.');
            setHeaderMessage('Visit on Desktop');
            // Show dialog
            setShowDialog(true);
        }
    }, []);

    return showDialog ? (
        <div>
            <AlertDialog open={true}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{headerMessage}</AlertDialogTitle>
                        <AlertDialogDescription>
                            {message}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    ) : null;
}