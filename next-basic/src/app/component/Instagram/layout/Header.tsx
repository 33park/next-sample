import React from 'react'
import { ChevronLeft, Bell, EllipsisVertical} from 'lucide-react';

export default function Header() {
  return (
    <header>
        <a href="" className="historyback"><ChevronLeft /></a>
        <span className="userId"></span>
        <a href="" className="alertico"><Bell/></a>
        <button className="moreIco"><EllipsisVertical /></button>
    </header>
  )
}
