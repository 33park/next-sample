'use client'

import React from 'react'
import { styled } from 'styled-components'
import { ChevronLeft , EllipsisVertical,Bell   } from 'lucide-react';
import { flexBox } from '@/style/styles/common';
import InnerContent from '../component/instargram/InnerContent'

export default function UserDetailPage() {
	return (
		<>
			<header>
				<a href="" className="historyback"><ChevronLeft /></a>
				<span className="userId"></span>
				<a href="" className="alertico"><Bell/></a>
				<button className="moreIco"><EllipsisVertical /></button>
			</header>
			<InnerContent></InnerContent>
			<footer>
				<div className="tab"></div>
				<div className="tabcontent"></div>
			</footer>
		</>
	)
}
