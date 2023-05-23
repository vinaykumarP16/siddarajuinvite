import * as React from 'react';
import { BiTime } from 'react-icons/bi';
import { GiDiamondRing, GiLinkedRings } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import { SiGooglemaps } from 'react-icons/si';
import { SlCalender } from 'react-icons/sl';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Marriage invitation</h1>
      <p>
        {' '}
        <GiDiamondRing /> Deepa S weds <GiLinkedRings /> Jagadhish T{' '}
        <GiDiamondRing />{' '}
      </p>
      <p>
        {' '}
        <SlCalender /> on 01-06-2023{' '}
      </p>
      <p>Dhare: 01-06-2023 </p>
      <p>
        {' '}
        <BiTime /> Muhurtha : morning 10:45 AM to 11:05 AM{' '}
      </p>
      <p>
        {' '}
        <GoLocation /> venue : Shree Basaveshwara Temple, sogalapalya,
        channapattana{' '}
      </p>
      <a
        target="_blank"
        href="https://maps.app.goo.gl/ZukpjfaGdVMuCsEC7"
        rel="noreferrer"
        style={{ textDecoration: 'none' }}
      >
        Maps <SiGooglemaps />{' '}
      </a>

      <p>
        {' '}
        invite by : <b> siddaraju S & family </b>{' '}
      </p>
    </div>
  );
}
