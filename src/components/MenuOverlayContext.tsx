'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

type MenuOverlayContextValue = {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
};

const MenuOverlayContext = createContext<MenuOverlayContextValue | undefined>(undefined);

export function MenuOverlayProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = useCallback(() => setIsOpen(true), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <MenuOverlayContext.Provider value={{ isOpen, openMenu, closeMenu, toggleMenu }}>
      {children}
    </MenuOverlayContext.Provider>
  );
}

export function useMenuOverlay() {
  const ctx = useContext(MenuOverlayContext);
  if (!ctx) {
    throw new Error('useMenuOverlay must be used within a MenuOverlayProvider');
  }
  return ctx;
}


