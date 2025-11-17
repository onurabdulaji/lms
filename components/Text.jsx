"use client";

import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

const Text = () => {
  const handleClick = (mode) => {
    mode
      ? toast.success("This is a success message!")
      : toast.error("This is an error message!");
  };
  return (
    <div>
      <Button
        className="bg-red-600"
        variant="default"
        onClick={() => handleClick(false)}
      >
        Hello Onur
      </Button>
    </div>
  );
};

export default Text;
