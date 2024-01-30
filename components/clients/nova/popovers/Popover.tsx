import React, { ReactNode, useState, useEffect, useRef, useCallback } from 'react';

interface PopoverProps {
  children: ReactNode;
  onClose?: () => void;
}

export const Popover: React.FC<PopoverProps> = ({ children, onClose }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
    setIsPopoverOpen(false);
  }, [onClose]); 

  const handleClickOutside = (event: MouseEvent) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
      handleClose(); 
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]); 

  return (
    <div className={`popover ${isPopoverOpen ? 'open' : ''}`} ref={popoverRef}>
      {children}
    </div>
  );
};

interface PopoverTriggerProps {
  onToggle: () => void;
  children: React.ReactNode;
}

export const PopoverTrigger: React.FC<PopoverTriggerProps> = ({ onToggle, children }) => {
  return (
    <div className="popover-trigger" onClick={onToggle}>
      {children}
    </div>
  );
};

interface PopoverContentProps {
  children: React.ReactNode;
  onClose?: () => void;
}

export const PopoverContent: React.FC<PopoverContentProps> = ({children, onClose }) => {
  useEffect(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <div className="popover-content" >
      {children}
    </div>
  );
};
