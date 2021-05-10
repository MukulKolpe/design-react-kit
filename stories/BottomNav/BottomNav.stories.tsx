import React from 'react';

import { BottomNav, BottomNavItem } from '../../src';

const EsempiComponent = () => (
  <BottomNav>
    <BottomNavItem label='messaggi' />
    <BottomNavItem label='immagini' iconName='it-camera' />
    <BottomNavItem label='documenti' iconName='it-file' />
  </BottomNav>
);

const BadgeComponent = () => (
  <BottomNav>
    <BottomNavItem label='messaggi' badge={1} srText='- 1 da leggere' />
    <BottomNavItem
      label='immagini'
      badge={2}
      iconName='it-camera'
      srText='- 2 da vedere'
      active
    />
    <BottomNavItem
      label='documenti'
      badge={88}
      iconName='it-file'
      srText='- 88 da esaminare'
    />
    <BottomNavItem label='preferiti' iconName='it-star-outline' />
    <BottomNavItem label='preferenze' iconName='it-settings' />
  </BottomNav>
);

const AlertComponent = () => (
  <BottomNav>
    <BottomNavItem
      alert
      label='messaggi'
      srText='- nuovo contenuto disponibile'
    />
    <BottomNavItem label='immagini' iconName='it-camera' />
    <BottomNavItem
      alert
      label='documenti'
      iconName='it-file'
      srText='- nuovo contenuto disponibile'
    />
    <BottomNavItem label='preferiti' iconName='it-star-outline' />
    <BottomNavItem label='preferenze' iconName='it-settings' />
  </BottomNav>
);

export default {
  title: 'Componenti/BottomNav'
};

export const _Esempi = EsempiComponent;

export const _Badge = BadgeComponent;

export const _Alert = AlertComponent;
