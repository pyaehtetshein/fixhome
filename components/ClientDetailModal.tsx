"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

export const ClientDetailModal = ({
  patientId,
  userId,
  name,
  birthDate,
  address,
  occupation,
  insuranceProvider,
  identificationType,
  identificationNumber,
  typeofProperty,
  ageofProperty,
  ownOrRent,
  title,
  description,
  identificationDocumentUrl,
}: {
  name: string;
  birthDate: string;
  address: string;
  occupation: string;
  insuranceProvider: string;
  identificationType: string;
  identificationNumber: string;
  typeofProperty: string;
  ageofProperty: string;
  ownOrRent: string;
  patientId: string;
  userId: string;
  title: string;
  description: string;
  identificationDocumentUrl: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">View Profile</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-3 text-sm">
          <div>
            <span className="font-medium">Name:</span> {name}
          </div>
          <div>
            <span className="font-medium">Birth Date:</span> {birthDate}
          </div>
          <div>
            <span className="font-medium">Address:</span> {address}
          </div>
          <div>
            <span className="font-medium">Occupation:</span> {occupation}
          </div>
          <div>
            <span className="font-medium">Insurance Provider:</span>{" "}
            {insuranceProvider}
          </div>
          <div>
            <span className="font-medium">Type of Property:</span>{" "}
            {typeofProperty}
          </div>
          <div>
            <span className="font-medium">Age of Property:</span>{" "}
            {ageofProperty}
          </div>
          <div>
            <span className="font-medium">Own or Rent:</span> {ownOrRent}
          </div>
          <div>
            <span className="font-medium">ID Type:</span> {identificationType}
          </div>
          <div>
            <span className="font-medium">ID Number:</span>{" "}
            {identificationNumber}
          </div>
        </div>

        {identificationDocumentUrl && (
          <div className="mt-4">
            <p className="font-medium mb-2">Identification Document:</p>
            <img
              src={identificationDocumentUrl}
              alt="Identification Document"
              className="w-full rounded border shadow-md"
            />
          </div>
        )}

        <DialogFooter className="pt-4">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
