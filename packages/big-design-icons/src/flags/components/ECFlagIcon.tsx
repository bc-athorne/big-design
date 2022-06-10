// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';

import { PrivateIconProps } from '../../base';
import { useUniqueId } from '../../utils';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({
  svgRef,
  title = 'EC flag',
  theme,
  ...props
}) => {
  const uniqueTitleId = useUniqueId('icon');
  const titleId = title ? props.titleId || uniqueTitleId : undefined;
  const ariaHidden = titleId ? undefined : true;

  return (
    <svg
      aria-hidden={ariaHidden}
      aria-labelledby={titleId}
      ref={svgRef}
      viewBox="0 0 640 480"
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g fillRule="evenodd" strokeWidth="1pt">
        <path d="M0 0h640v480H0z" fill="#ffe800" />
        <path d="M0 240h640v240H0z" fill="#00148e" />
        <path d="M0 360h640v120H0z" fill="#da0010" />
      </g>
      <g fillRule="evenodd">
        <path d="M269.6 290.8L197 367.3l-1.2-1.6 72.4-76.5 1.2 1.6zm50.4 12.5l-94.8 100-1.6-1.6 94.7-100 1.7 1.6z" />
        <path
          d="M478.4 60.2v88.6l17.7 88.6 17.7-88.6V60.2h-35.4z"
          fill="gray"
          stroke="#000"
          strokeWidth={4.1}
          transform="matrix(-.07 -.07 -.1 .1 265 429.6)"
        />
        <path
          d="M478.4 60.2v88.6l17.7 88.6 17.7-88.6V60.2h-35.4z"
          fill="gray"
          stroke="#000"
          strokeWidth={4.1}
          transform="matrix(-.07 -.07 -.1 .1 240.6 390.5)"
        />
      </g>
      <path
        d="M301.2 272.8s-17.7 336.6 53.1 336.6S460.6 574 460.6 574l-.8-185-158.6-116.2z"
        fill="#ffdf00"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(.45 0 0 .64 72.4 -59.8)"
      />
      <path
        d="M344.5 304.2c0 17.7-7.9 269.8 27.5 269.8s88.6-17.7 88.6-17.7l-.8-167.3-115.3-84.8z"
        fill="#0000c4"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(.45 0 0 .64 72.4 -59.8)"
      />
      <path
        d="M367.5 321.2c0 17.7 4.5 217.4 40 217.4h53.1l-.8-149.6-92.3-67.8z"
        fill="#e10000"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(.45 0 0 .64 72.4 -59.8)"
      />
      <path d="M206.2 116l72.4 76.5 1.3-1.6-72.4-76.5-1.3 1.6z" fillRule="evenodd" />
      <path
        d="M301.2 272.8S265.8 609.4 372 609.4c88.5 0 88.5-53.1 106.2-53.1l-17.7-124-159.4-159.5z"
        fill="#ffdf00"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(.58 0 0 .62 9.6 -10.2)"
      />
      <g stroke="#000">
        <path
          d="M269.6 155.2c1.1 0 28.3-94 119-147.2"
          fill="none"
          strokeWidth={2.3}
          transform="matrix(.4 -.03 -.05 .35 135.1 147.4)"
        />
        <path
          d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z"
          fill="#005b00"
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="matrix(.14 -.22 .3 .14 175.9 257.4)"
        />
        <path
          d="M454.2-169.3c0 4-3.8 7.4-8.5 7.4s-8.5-3.3-8.5-7.4 3.8-7.3 8.5-7.3 8.5 3.3 8.5 7.3z"
          fill="red"
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="matrix(.18 -.1 .1 .17 177.6 256.7)"
        />
        <path
          d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z"
          fill="#005b00"
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="matrix(.18 .12 -.13 .33 181 96.4)"
        />
        <path
          d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z"
          fill="#005b00"
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="matrix(.17 -.03 -.03 .33 179.3 159.3)"
        />
        <path
          d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z"
          fill="#005b00"
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="matrix(.06 .25 -.17 .2 228 45.5)"
        />
        <path
          d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z"
          fill="#005b00"
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="matrix(.2 -.2 .2 .24 150.3 241)"
        />
        <path
          d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z"
          fill="#005b00"
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="matrix(.22 -.22 .25 .2 135.6 282.1)"
        />
        <path
          d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z"
          fill="#005b00"
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="matrix(.26 .1 -.2 .32 130.8 147.7)"
        />
        <path
          d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z"
          fill="#005b00"
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="matrix(.15 .2 -.32 .22 178.5 103.3)"
        />
        <path
          d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z"
          fill="#005b00"
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="matrix(.08 .1 -.14 .16 250.7 102.6)"
        />
        <path
          d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z"
          fill="#005b00"
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="matrix(.1 0 -.08 .17 238 136.4)"
        />
        <path
          d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z"
          fill="#005b00"
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="matrix(0 .14 -.14 .08 287.4 81.1)"
        />
        <path
          d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z"
          fill="#005b00"
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="matrix(.07 .1 -.25 .15 220.7 115.6)"
        />
        <path
          d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z"
          fill="#005b00"
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="matrix(.13 .22 -.33 .2 207 70.1)"
        />
        <path
          d="M269.6 155.2c1.1 0 28.3-94 119-147.2"
          fill="none"
          strokeWidth={2.4}
          transform="matrix(.35 -.2 .14 .28 111.8 227.8)"
        />
        <path
          d="M454.2-169.3c0 4-3.8 7.4-8.5 7.4s-8.5-3.3-8.5-7.4 3.8-7.3 8.5-7.3 8.5 3.3 8.5 7.3z"
          fill="red"
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="matrix(.18 -.1 .1 .17 200.3 224.6)"
        />
        <path
          d="M454.2-169.3c0 4-3.8 7.4-8.5 7.4s-8.5-3.3-8.5-7.4 3.8-7.3 8.5-7.3 8.5 3.3 8.5 7.3z"
          fill="red"
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="matrix(.18 -.1 .1 .17 211.1 218.3)"
        />
        <path
          d="M454.2-169.3c0 4-3.8 7.4-8.5 7.4s-8.5-3.3-8.5-7.4 3.8-7.3 8.5-7.3 8.5 3.3 8.5 7.3z"
          fill="red"
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="matrix(.2 -.1 .07 .13 166.8 232.7)"
        />
        <path
          d="M454.2-169.3c0 4-3.8 7.4-8.5 7.4s-8.5-3.3-8.5-7.4 3.8-7.3 8.5-7.3 8.5 3.3 8.5 7.3z"
          fill="red"
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="matrix(.2 -.1 .07 .13 170 231.3)"
        />
        <path
          d="M454.2-169.3c0 4-3.8 7.4-8.5 7.4s-8.5-3.3-8.5-7.4 3.8-7.3 8.5-7.3 8.5 3.3 8.5 7.3z"
          fill="red"
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="matrix(.2 -.1 .07 .13 168.1 234.3)"
        />
        <path
          d="M252.7 167.3c.4.8 0 1.8-1 2.3s-2 .2-2.4-.7 0-1.8 1-2.3 2-.2 2.3.7z"
          fill="red"
          fillRule="evenodd"
          strokeWidth={0.3}
        />
        <path
          d="M255 164.9c.3.8 0 1.8-1 2.3s-2 .2-2.5-.6 0-1.9 1-2.4 2-.1 2.4.7z"
          fill="red"
          fillRule="evenodd"
          strokeWidth={0.3}
        />
        <path
          d="M255.5 166c.4.8 0 1.9-1 2.3s-2 .2-2.4-.6 0-1.8 1-2.3 2-.2 2.4.6z"
          fill="red"
          fillRule="evenodd"
          strokeWidth={0.3}
        />
      </g>
      <path
        d="M336.6 308.3c0 17.7-35.4 212.6 53.2 265.7 35.4 17.7 88.5-17.7 88.5 0l-17.7-141.7-124-124z"
        fill="#0000c4"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(.58 0 0 .62 9.6 -10.2)"
      />
      <path
        d="M372 343.7c0 17.7-17.7 159.4 35.5 194.9 35.4 35.4 124 25.8 124 25.8l-70.9-132.1-88.6-88.6z"
        fill="#e10000"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(.58 0 0 .62 9.6 -10.2)"
      />
      <path d="M183.8 158l94.8 100 1.7-1.6-94.8-99.9-1.6 1.6z" fillRule="evenodd" />
      <path
        d="M460.6 184.3l17.7 35.4v17.7c-.8-1.3 0 17.7-17.7 17.7S443 219.7 443 219.7s-17.7 35.4-17.7 70.9 17.7 53.1 17.7 53.1-2.6-36.7 17.7-35.4c20.4 1.2 17.7 17.7 17.7 17.7v35.4h17.8V219.7l17.7-35.4-27.2-53.2-26 53.1z"
        fill="#cececc"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(.14 -.14 .1 .1 86.3 192.2)"
      />
      <path
        d="M557.8 95.7l-26.3 70.8 17.7 53.2-35.4-17.7 35.4 53.1v35.5H567V255l35.5-53.1-35.5 17.7 17.8-53.2-26.9-70.8z"
        fill="#cececc"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(.1 -.16 .14 .1 114 183.8)"
      />
      <path
        d="M422.5 137c0 2-2 3.7-4.3 3.7s-4.4-1.7-4.4-3.7 2-3.8 4.4-3.8 4.3 1.7 4.3 3.8zm-6.2 7.9c0 35.8 20.9 187.8 22.6 191.5.1 4.5-4.8 6.4-7.1.9-6.6-17.4-20.8-160-21.3-193.3-.3-13.7 3.7-14.8 8.3-14.5 3.7.2 8.3 3.7 8.3 7.9 0 5-5.8 8.7-10.8 7.5z"
        fill="#e10000"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(.4 0 0 .3 43.8 69.8)"
      />
      <path
        d="M422.5 137c0 2-2 3.7-4.3 3.7s-4.4-1.7-4.4-3.7 2-3.8 4.4-3.8 4.3 1.7 4.3 3.8zm-6.2 7.9c31.5 61.4 48.7 166.7 50.4 170.5.1 4.4-4.8 6.4-7.1.8-2.5-3.3-12.7-100.2-49.1-172.2-.3-13.7 3.7-14.8 8.3-14.5 3.7.2 8.3 3.7 8.3 7.9 0 5-5.8 8.7-10.8 7.5z"
        fill="#0000c4"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(.38 .1 -.15 .3 76 38.2)"
      />
      <path
        d="M186.7 151.5c0 1-1 2-2.2 2-1.2 0-2.2-1-2.2-2s1-1.8 2.2-1.8c1.2 0 2.1.8 2.1 1.8zm-3.2 4c0 17.9 10.5 93.9 11.3 95.8 0 2.2-2.3 3.2-3.5.4-3.3-8.7-10.4-80-10.7-96.6-.1-6.9 1.9-7.4 4.2-7.3 1.9.1 4.1 1.9 4.1 4 0 2.4-2.9 4.3-5.4 3.7z"
        fill="#e10000"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth={0.7}
      />
      <path
        d="M422.5 137c0 2-2 3.7-4.3 3.7s-4.4-1.7-4.4-3.7 2-3.8 4.4-3.8 4.3 1.7 4.3 3.8zm-6.2 7.9c31.5 61.4 48.7 166.7 50.4 170.5.1 4.4-4.8 6.4-7.1.8-2.5-3.3-12.7-100.2-49.1-172.2-.3-13.7 3.7-14.8 8.3-14.5 3.7.2 8.3 3.7 8.3 7.9 0 5-5.8 8.7-10.8 7.5z"
        fill="#0000c4"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(.48 .15 -.2 .48 16.7 31.6)"
      />
      <g fillRule="evenodd">
        <path d="M370.4 290.8l72.5 76.5 1.3-1.6-72.5-76.5-1.3 1.6zM320 303.3l94.8 100 1.6-1.6-94.7-100-1.7 1.6z" />
        <path
          d="M478.4 60.2v88.6l17.7 88.6 17.7-88.6V60.2h-35.4z"
          fill="gray"
          stroke="#000"
          strokeWidth={4.1}
          transform="matrix(.07 -.07 .1 .1 375 429.6)"
        />
        <path
          d="M478.4 60.2v88.6l17.7 88.6 17.7-88.6V60.2h-35.4z"
          fill="gray"
          stroke="#000"
          strokeWidth={4.1}
          transform="matrix(.07 -.07 .1 .1 399.4 390.5)"
        />
      </g>
      <g fillRule="evenodd" strokeWidth="1pt">
        <path
          d="M301.2 272.8s-17.7 336.6 53.1 336.6S460.6 574 460.6 574l-.8-185-158.6-116.2z"
          fill="#ffdf00"
          stroke="#000"
          transform="matrix(-.45 0 0 .64 567.6 -59.8)"
        />
        <path
          d="M344.5 304.2c0 17.7-7.9 269.8 27.5 269.8s88.6-17.7 88.6-17.7l-.8-167.3-115.3-84.8z"
          fill="#0000c4"
          stroke="#000"
          transform="matrix(-.45 0 0 .64 567.6 -59.8)"
        />
        <path
          d="M367.5 321.2c0 17.7 4.5 217.4 40 217.4h53.1l-.8-149.6-92.3-67.8z"
          fill="#e10000"
          stroke="#000"
          transform="matrix(-.45 0 0 .64 567.6 -59.8)"
        />
        <path d="M433.8 116l-72.4 76.5-1.3-1.6 72.4-76.5 1.3 1.6z" />
        <g fill="#005b00" stroke="#000">
          <path
            d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z"
            transform="matrix(.16 -.07 .08 .35 309.5 211)"
          />
          <path
            d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z"
            transform="matrix(.2 -.05 .07 .4 291.5 182.6)"
          />
          <path
            d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z"
            transform="matrix(.23 .14 -.03 .4 296.5 69.4)"
          />
          <path
            d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z"
            transform="matrix(.25 .03 .02 .44 274.4 115)"
          />
          <path
            d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z"
            transform="matrix(.18 .17 -.04 .35 330 67)"
          />
          <path
            d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z"
            transform="matrix(.23 0 .03 .4 280.6 141.9)"
          />
          <path
            d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z"
            transform="matrix(.2 -.07 .07 .38 290.1 196.8)"
          />
          <path
            d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z"
            transform="matrix(.2 -.03 .05 .4 292.7 166.8)"
          />
          <path
            d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z"
            transform="matrix(.22 .15 -.05 .38 305 65.5)"
          />
          <path
            d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z"
            transform="matrix(.24 .05 0 .44 278.9 97.7)"
          />
          <path
            d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z"
            transform="matrix(.17 .17 -.06 .33 339 70)"
          />
          <path
            d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z"
            transform="matrix(.24 .02 0 .4 276.4 128)"
          />
        </g>
        <path
          d="M301.2 272.8S265.8 609.4 372 609.4c88.5 0 88.5-53.1 106.2-53.1l-17.7-124-159.4-159.5z"
          fill="#ffdf00"
          stroke="#000"
          transform="matrix(-.58 0 0 .62 630.4 -10.2)"
        />
        <path
          d="M336.6 308.3c0 17.7-35.4 212.6 53.2 265.7 35.4 17.7 88.5-17.7 88.5 0l-17.7-141.7-124-124z"
          fill="#0000c4"
          stroke="#000"
          transform="matrix(-.58 0 0 .62 630.4 -10.2)"
        />
        <path
          d="M372 343.7c0 17.7-17.7 159.4 35.5 194.9 35.4 35.4 124 25.8 124 25.8l-70.9-132.1-88.6-88.6z"
          fill="#e10000"
          stroke="#000"
          transform="matrix(-.58 0 0 .62 630.4 -10.2)"
        />
        <path d="M456.2 158l-94.8 100-1.7-1.6 94.8-99.9 1.7 1.6z" />
        <path
          d="M460.6 184.3l17.7 35.4v17.7c-.8-1.3 0 17.7-17.7 17.7S443 219.7 443 219.7s-17.7 35.4-17.7 70.9 17.7 53.1 17.7 53.1-2.6-36.7 17.7-35.4c20.4 1.2 17.7 17.7 17.7 17.7v35.4h17.8V219.7l17.7-35.4-27.2-53.2-26 53.1z"
          fill="#cececc"
          stroke="#000"
          transform="matrix(-.14 -.14 -.1 .1 553.7 192.2)"
        />
        <path
          d="M557.8 95.7l-26.3 70.8 17.7 53.2-35.4-17.7 35.4 53.1v35.5H567V255l35.5-53.1-35.5 17.7 17.8-53.2-26.9-70.8z"
          fill="#cececc"
          stroke="#000"
          transform="matrix(-.1 -.16 -.14 .1 526 183.8)"
        />
        <path
          d="M422.5 137c0 2-2 3.7-4.3 3.7s-4.4-1.7-4.4-3.7 2-3.8 4.4-3.8 4.3 1.7 4.3 3.8zm-6.2 7.9c0 35.8 20.9 187.8 22.6 191.5.1 4.5-4.8 6.4-7.1.9-6.6-17.4-20.8-160-21.3-193.3-.3-13.7 3.7-14.8 8.3-14.5 3.7.2 8.3 3.7 8.3 7.9 0 5-5.8 8.7-10.8 7.5z"
          fill="#e10000"
          stroke="#000"
          transform="matrix(-.4 0 0 .3 596.3 69.8)"
        />
        <path
          d="M422.5 137c0 2-2 3.7-4.3 3.7s-4.4-1.7-4.4-3.7 2-3.8 4.4-3.8 4.3 1.7 4.3 3.8zm-6.2 7.9c31.5 61.4 48.7 166.7 50.4 170.5.1 4.4-4.8 6.4-7.1.8-2.5-3.3-12.7-100.2-49.1-172.2-.3-13.7 3.7-14.8 8.3-14.5 3.7.2 8.3 3.7 8.3 7.9 0 5-5.8 8.7-10.8 7.5z"
          fill="#0000c4"
          stroke="#000"
          transform="matrix(-.38 .1 .15 .3 564 38.2)"
        />
        <path
          d="M453.4 151.5c0 1 1 2 2.1 2 1.2 0 2.2-1 2.2-2s-1-1.8-2.2-1.8c-1.2 0-2.1.8-2.1 1.8zm3 4a1152 1152 0 01-11.2 95.8c0 2.2 2.3 3.2 3.5.4 3.3-8.7 10.4-80 10.7-96.6.1-6.9-1.9-7.4-4.2-7.3-1.9.1-4.1 1.9-4.1 4 0 2.4 2.9 4.3 5.4 3.7z"
          fill="#e10000"
          stroke="#000"
          strokeWidth={0.7}
        />
        <path
          d="M422.5 137c0 2-2 3.7-4.3 3.7s-4.4-1.7-4.4-3.7 2-3.8 4.4-3.8 4.3 1.7 4.3 3.8zm-6.2 7.9c31.5 61.4 48.7 166.7 50.4 170.5.1 4.4-4.8 6.4-7.1.8-2.5-3.3-12.7-100.2-49.1-172.2-.3-13.7 3.7-14.8 8.3-14.5 3.7.2 8.3 3.7 8.3 7.9 0 5-5.8 8.7-10.8 7.5z"
          fill="#0000c4"
          stroke="#000"
          transform="matrix(-.48 .15 .2 .48 623.3 31.6)"
        />
      </g>
      <g fillRule="evenodd" stroke="#000" strokeWidth="1pt">
        <path
          d="M478.4 698a53.3 53.3 0 0053.1 0V556.3h-35.4c17.7 53.1 17.7 106.3-17.8 141.7z"
          fill="#e10000"
          transform="matrix(.58 0 0 .62 9.6 -10.2)"
        />
        <path
          d="M513.8 609.5c0 88.5-42.5 108.2-42.5 126 17.7 0 29.5-8.3 42.5-19.7 17.7-17.8 19.4-107.7 17.7-106.3h-17.7z"
          fill="#0000c4"
          transform="matrix(.35 0 0 .7 123.5 -90)"
        />
        <path
          d="M478.4 609.5c-.9 51.7-44.8 99.6-36.5 110.2 9.4 9.5 36.5-21.7 71.9-4 17.7-17.7 19.4-107.6 17.7-106.3h-53.1z"
          fill="#0000c4"
          transform="matrix(.35 0 0 .7 123.5 -90)"
        />
        <path
          d="M513.8 609.5c0 88.5-40.7 94.4-40.7 118 17.7 0 40.6-12.9 40.7-11.7 17.7-17.8 19.4-107.7 17.7-106.3h-17.7z"
          fill="#ffdf00"
          transform="matrix(.35 0 0 .46 112.5 51)"
        />
        <path
          d="M478.4 609.5c-.9 51.7-43.8 95.7-35.5 106.3 9.5 9.4 35.5-17.8 70.9 0 17.7-17.8 19.4-107.7 17.7-106.3h-53.1z"
          fill="#ffdf00"
          transform="matrix(.35 0 0 .46 112.5 51)"
        />
        <path
          d="M478.4 698a53.3 53.3 0 0053.1 0V556.3h-35.4c17.7 53.1 17.7 106.3-17.8 141.7z"
          fill="#e10000"
          transform="matrix(-.58 0 0 .62 630.4 -10.2)"
        />
        <path
          d="M513.8 609.5c0 88.5-42.5 108.2-42.5 126 17.7 0 29.5-8.3 42.5-19.7 17.7-17.8 19.4-107.7 17.7-106.3h-17.7z"
          fill="#0000c4"
          transform="matrix(-.35 0 0 .7 516.5 -90)"
        />
        <path
          d="M478.4 609.5c-.9 51.7-44.8 99.6-36.5 110.2 9.4 9.5 36.5-21.7 71.9-4 17.7-17.7 19.4-107.6 17.7-106.3h-53.1z"
          fill="#0000c4"
          transform="matrix(-.35 0 0 .7 516.5 -90)"
        />
        <path
          d="M513.8 609.5c0 88.5-40.7 94.4-40.7 118 17.7 0 40.6-12.9 40.7-11.7 17.7-17.8 19.4-107.7 17.7-106.3h-17.7z"
          fill="#ffdf00"
          transform="matrix(-.35 0 0 .46 527.5 51)"
        />
        <path
          d="M478.4 609.5c-.9 51.7-43.8 95.7-35.5 106.3 9.5 9.4 35.5-17.8 70.9 0 17.7-17.8 19.4-107.7 17.7-106.3h-53.1z"
          fill="#ffdf00"
          transform="matrix(-.35 0 0 .46 527.5 51)"
        />
      </g>
      <g fillRule="evenodd" stroke="#000">
        <path
          d="M198.6 78l-89.7 35.4 89.7 35.4 44.8-17.7 22.4 17.7 22.4 35.4 22.5-35.4 22.4-17.7H1535V95.7H333l-22.4-17.8c0-17.7 4.7-35.4 22.5-35.4h89.6c0-17.7-44.8-53.1-134.5-53.1-89.6 0-134.5 35.4-134.5 53.1h89.7c17.7 0 22.4 17.7 22.4 35.5l-22.4 17.7-44.9-17.8z"
          fill="#908f8a"
          strokeWidth={4.5}
          transform="matrix(.12 0 0 .22 217.8 324.4)"
        />
        <path
          d="M204.3 95.7H541v17.7H204.4zm0-17.8H541v17.8H204.4zm0-17.7H541V78H204.4zm0-17.7H541v17.7H204.4zm0-17.7H541v17.7H204.4zm0-17.8H541v17.8H204.4zm0-17.6H541V7H204.4z"
          fill="#b74d00"
          strokeWidth={1.8}
          transform="matrix(.28 0 0 .27 216 334.6)"
        />
        <path
          d="M423.2 60.2l137.8 124h19.7L443 60.3h-19.7z"
          fill="#908f8a"
          strokeWidth={3.3}
          transform="matrix(.25 0 0 .27 171.9 315.2)"
        />
        <path
          d="M423.2 60.2l137.8 124h19.7L443 60.3h-19.7z"
          fill="#908f8a"
          strokeWidth={3.3}
          transform="matrix(.25 0 0 -.27 171.9 382.2)"
        />
        <path
          d="M425.2 60.2v124h17.7v-124h-17.7z"
          fill="#908f8a"
          strokeWidth={3.1}
          transform="matrix(.28 0 0 .27 159.6 315.2)"
        />
        <path
          d="M423.2 60.2l137.8 124h19.7L443 60.3h-19.7z"
          fill="#908f8a"
          strokeWidth={3.3}
          transform="matrix(.25 0 0 .27 216.2 315.2)"
        />
        <path
          d="M423.2 60.2l137.8 124h19.7L443 60.3h-19.7z"
          fill="#908f8a"
          strokeWidth={3.3}
          transform="matrix(.25 0 0 -.27 216.2 382.2)"
        />
        <path
          d="M425.2 60.2v124h17.7v-124h-17.7z"
          fill="#908f8a"
          strokeWidth={3.1}
          transform="matrix(.28 0 0 .27 238.4 315.2)"
        />
        <path
          d="M425.2 60.2v124h17.7v-124h-17.7z"
          fill="#908f8a"
          strokeWidth={3.1}
          transform="matrix(.28 0 0 .27 204 315.2)"
        />
        <path
          d="M425.2 60.2v124h17.7v-124h-17.7z"
          fill="#908f8a"
          strokeWidth={3.1}
          transform="matrix(.28 0 0 .27 194 315.2)"
        />
      </g>
      <g fill="#ffdf00" fillRule="evenodd" stroke="#000" strokeWidth="1pt">
        <path
          d="M655.5 396.9c0 88-55.6 159.4-124 159.4s-124-71.4-124-159.4 55.5-159.5 124-159.5 124 71.4 124 159.4zm-17.7 0c0 78.2-47.6 141.7-106.3 141.7-58.7 0-106.3-63.5-106.3-141.7 0-78.3 47.6-141.8 106.3-141.8 58.7 0 106.3 63.5 106.3 141.8z"
          transform="matrix(.58 0 0 .62 9.6 -10.2)"
        />
        <path
          d="M579.8 250c-14.9-8.1-31.2-12.6-48.3-12.6s-33.4 4.5-48.3 12.5l7 16.4a82.8 82.8 0 0182.7 0l6.9-16.4z"
          transform="matrix(.58 0 0 .62 9.6 -10.2)"
        />
        <path
          d="M579.8 250c-14.9-8.1-31.2-12.6-48.3-12.6s-33.4 4.5-48.3 12.5l7 16.4a82.8 82.8 0 0182.7 0l6.9-16.4z"
          transform="matrix(.58 0 0 -.62 9.8 479.3)"
        />
      </g>
      <path
        d="M379.6 235.9c0 48.5-27.7 87.8-61.7 87.8s-61.6-39.3-61.6-87.8 27.6-88 61.6-88 61.7 39.4 61.7 88z"
        fill="#a7cfff"
        fillRule="evenodd"
      />
      <path
        d="M637.8 396.9c1.1 26.6-4.6 39.6-11.9 67.3-1.9 3-11-6.5-16.4-11.2s-7.8 4.2-14.6-3c-6.7-7.4-11 2-16-4.2s-51.3-7-51.3-7.6c4.6-2.2 28.2.2 24.4-11.1-4.3-11.8-31-.4-34.6-15.4-2.5-15-53.6-15.6-57.3-19.2 1.5 5.6 39.8 8 38.9 22.5-.9 6-37.7 7.7-41.3 12.7-3 6.3 29-1.7 30.1 6 0 3.2-4.7 0-21.3 5-8.4 2.5 15.4 10.3 6.4 14.6-9 4.3-28.3 6.2-27.5 8 3 9 44.7 19.6 40.6 21.1-14.8 6.6-22.6 10.9-29.7 14.7a167.9 167.9 0 01-31.1-100.2c31.7-11.4 25-13.8 83.6-13.8s78 2.3 129 13.8z"
        fill="#afff7b"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(.58 0 0 .62 9.6 -10.2)"
      />
      <path
        d="M637.8 396.9c-8 0-16.4 3.4-25 3.4-8.7 0-17.5-3.5-26.5-3.5s-19.3 4.6-28.5 4.6c-9.3 0-17.4-4.5-26.7-4.5s-18.6 3.4-27.8 3.4-18.3-3.5-27.2-3.5-17.7 3.5-26.2 3.5-16.8-3.5-24.7-3.5c0-19.5 3-38.1 8.4-55.1 27 2 11-15.7 27-15.7a33 33 0 0125.3 9.8c2.4 0 14.4-11.4 27.9-9.8 13.4 1.6 8.5 27.3 26.4 28.6 9 6.8 14.3 11.1 26.7 13.9 17.7 1.6 68.4-2.5 68.7-.2a188.2 188.2 0 012.2 28.6z"
        fill="#fff"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(.58 0 0 .62 9.6 -10.2)"
      />
      <path
        d="M549.9 474c0-5.7 13.5-9.5 13.5-18.6s-12-9.3-12.4-17.8c-.2-3.5 10.3-7 14.9-7.4s8.5 7.4 8.5 9.1-4.7-4.2-8.6-4.3-12.3.6-12.3 2.3c0 3.4 14.8 7.6 13.7 19-1.1 11.2-12.7 14.6-12.7 18s5 12.8 5 12.8-9.7-7.5-9.7-13.2z"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(.2 0 0 .48 217.2 59.5)"
      />
      <path
        d="M549.9 474c0-5.7 13.5-9.5 13.5-18.6s-12-9.3-12.4-17.8c-1-4 11.8-6.6 16.4-6.9s10 8 10 9.6-5.4-5.2-9.3-5.3-14.6.6-14.6 2.3c0 3.4 14.8 7.6 13.7 19-1.1 11.2-12.7 14.6-12.7 18s5 12.8 5 12.8-9.7-7.5-9.7-13.2z"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(-.2 0 0 .48 445.8 59.1)"
      />
      <path
        d="M333 264.9c0 1.3-.7 2.4-1.5 2.4s-1.4-1.1-1.4-2.5.6-2.4 1.4-2.4c.8 0 1.5 1.1 1.5 2.5zm17 9h.4v19.5h-.5zm4.1-1.6h.5V292h-.5z"
        fillRule="evenodd"
      />
      <path d="M352.6 281.2v-.5l4 .7v.5z" fillRule="evenodd" />
      <path
        d="M497.3 478s26 11.4 31.7 18.2c5.6 6.8 3.4 6.8 3.4 6.8l57.7 2.3c0-3.4 10.2-3.4 12.5-11.4 2.3-7.9 2.3-10.2 2.3-10.2l-18.1 5.7 1-10.2H572l-2.3 10.2-34-1.1L538 461l-6.8 1.1-1 26c-1.2 0-31.8-7.9-33-10.1z"
        fill="#b74d00"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(.58 0 0 .62 7 -9.5)"
      />
      <path
        d="M440.5 316.3s37.7-11.2 92.1-10.4 92.1 12.8 91.3 12.8-10.4-18.4-10.4-18.4-38.4-10.5-81.7-11.3c-43.2-.8-80.9 8-80 8.8l-11.3 18.5z"
        fill="#fede00"
        fillRule="evenodd"
        stroke="#fede00"
        strokeWidth="1pt"
        transform="matrix(.58 0 0 .62 9.6 -10.2)"
      />
      <path
        d="M306 169.8l13.6-.2.2 7.9-13.6.3zm-31.2 4.3L270 182l16.2-2-1.3-7.7-10.1 2zm13.7-3l13.6-1.1.6 7.8-13.5 1.2zm48.9-.7l-13.5-1-.5 8 13.5.8zm29.2 5l4.9 9.6-14.6-3.6 1.6-7.7 8 1.6zm-11.8-3l-13.4-1.7-1 7.8 13.5 1.8z"
        fill="#38a9f9"
        fillRule="evenodd"
      />
      <path
        d="M532.6 323.5l-2.5-13.5-7.6 11.5 2.8-13.5-11.3 7.7 7.6-11.3-13.4 2.8 11.5-7.6-13.5-2.5 13.5-2.6-11.5-7.6 13.4 2.8-7.7-11.3 11.4 7.7-2.8-13.5 7.6 11.5 2.5-13.5 2.6 13.5 7.5-11.5-2.7 13.5 11.3-7.7-7.7 11.3 13.5-2.8-11.5 7.6 13.5 2.6-13.5 2.5 11.5 7.6-13.5-2.8 7.7 11.3L540 308l2.8 13.5-7.6-11.5z"
        fill="#ffdf00"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(.58 0 0 .62 9.6 -10.2)"
      />
      <path
        d="M547 293.9c0 9.3-6.6 16.8-14.8 16.8s-14.8-7.5-14.8-16.8S524 277 532.2 277s14.8 7.6 14.8 17z"
        fill="#ffdf00"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(.57 0 0 .5 18.3 21.8)"
      />
      <path
        d="M320.7 170.6c0 .5-1.3 1-2.8 1s-2.8-.5-2.8-1 1.2-1 2.8-1 2.8.4 2.8 1zm6 0c0 .5-.9 1-2 1s-2.2-.5-2.2-1c0-.6 1-1 2.1-1s2.1.4 2.1 1z"
        fillRule="evenodd"
      />
      <path
        d="M529.4 297.9l.8.8c-1.9-2-1-1.2 1.6 3.2 2.4-.5 3.1-1.4 4.8-2.4"
        fill="none"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(.56 -.18 .17 .6 -26.7 90.6)"
      />
      <path
        d="M527.8 304.3l.8.8c-1.9-2-1-1 3.2 1.6 4 .5 8.1-1.2 10.5-4"
        fill="none"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(.58 0 0 .62 8.7 -10.2)"
      />
      <path
        d="M281.4 194.8s1 8-5.1 18c-6 9.9-5.1 6.4-5.1 6.4s2.8 5.5 2.3 5.5-4.7-5-4.7-5l-5 5.5s4.6-8.5 4.1-8.5-1.4-3-1.4-3l3.7-1.5s5.6-10.4 5.6-9.9-16.7 11.4-16.7 11.4l22.3-18.8zm3.7 3c-.5 0 2.3 8 4.7 12 2.3 4 2.3 8.9 2.3 8.9l7.9 4-10.2-15.4 6.5 2.4-11.2-11.9zm0 20.9s5.6 6 6 8 .5 6.4.5 6.4l-2.3-5-3.3 4.5s2.4-7 1.9-7.5-3.7 2.5-3.7 2.5 1.4-4 1.4-4.4 0-3-.5-4.5zm-27.9 13.9c1.9-1.5 5.6-2.5 5.6-2.5s-2.3 4-2.8 4-1.8 0-2.8-1.5zm64.1-21.8s12.1 7.4 12.1 7.9-7.9-3.5-7.9-3.5l-4.2-4.4zm-21.8-15.5c1 .5 17.7 14.4 17.2 14.4s-7.4-4-7.4-3.4v3.4l-3.8-7.9-.9 3-5-9.5zm4.2 22.4l4.6 9.4 4.7-1s-8.8-8.4-9.3-8.4zm14.4-6l.5 9s2.7 2.5 2.7 2-2.7-10.5-3.2-11z"
        fill="#b7e1ff"
        fillRule="evenodd"
      />
      <path
        d="M182.6 89.5s21-11.6 44.9-20.2a303.8 303.8 0 0154.2-14.4c7 0 19.2 17.8 21.2 17.8s10.1-5 20.3-5 16.1 8 18.2 8h18.2c2 0-6.1-19.8 0-18.8 3 .5 28.8 4.5 52.8 12.2 24 7.8 58 21.6 58 21.6S414.9 98 400 95.9c-2 1 0 13-3 7.7-4.6-1-21.7-3.7-24.7-3.7s-8.7 3.4-16.8 5.4c-8 2-18.2 5-18.2 5l13.2 20.7-16.2 8s-10.1-23.8-14.2-23.8-6 16.8-11.1 15.8c-5-1-7-15.8-11.1-19.8-4-3.9-25.4-5.4-33.5-7.3-8-2-21.1-3.5-28.2-5.5-7-2-14.2 5-17.2 5s4-6 1-7-5 3-7 3-23.3-4-25.3-5 5-4.9 3-4.9h-8.1z"
        fill="#984000"
        fillRule="evenodd"
      />
      <path
        d="M463-65c0 21.2-20.6 38.4-45.9 38.4S371.3-43.8 371.3-65s20.5-38.3 45.8-38.3S463-86.1 463-65z"
        fill="gray"
        fillRule="evenodd"
        stroke="#772600"
        strokeWidth={3.7}
        transform="matrix(.22 0 0 .26 231.6 96.5)"
      />
      <path
        d="M284.7-60c6.7-6.6 15-16.6 36.7-16.6 5-1.7 5-11.7 16.6-11.7 11.7 0 8.3 10 16.7 13.4 8.3 3.3 76.6-3.4 76.6-3.4s6.6 5 6.6 11.7-5 11.6-6.6 11.6-68.3-5-73.3-3.3c-5 1.7-8.3 3.3-20 3.3-11.6 0-15-11.6-23.3-11.6s-16.6-1.7-30 6.7z"
        fill="#984000"
        fillRule="evenodd"
        stroke="#772600"
        strokeWidth={5.3}
        transform="matrix(.27 0 0 .32 205.4 100.7)"
      />
      <path
        d="M487.9-76.6h26.6c9.6.1 12.9 3 21.7 3.3h23.3c8.5-.3 13-2.3 21.6-3.3 14.5-.2 9.6-1.3 6.7-10-2.6-6.5-3-9.6-6.7-13.3-1.4-8-4.6-10.8-5-20-1.5-7-4.3-11.7-1.6-20 3.8 5.7 5.3 8 15 8.4 10 0 13.9-.3 20 3.3 4.6 4.9 10.8 3.3 20 3.3 7.6 1.4 8.9 5.3 14.9 8.3 7.1 4 11.7 5 21.6 5 8 1.5 15 2.6 20 5 4.3 5.1 11 6.4 20 6.7 5 0 9-.5 13.3-1.7 7.7.4 15.5 0 25 0 6.2 7.2 7.6 9.9 18.3 10 7.4 5.2 13.6 6 20 8.3h25c9 .7 11.8 4.4 20 6.7a200.9 200.9 0 0021.6 8.3 108 108 0 0021.7 1.7c6.1 3.2 13.6 3.4 18.3 6.6 6.9 1.5 16.3 3.3 21.6 5 8.8 1.2 12.2 4 20 5 6.7 2-2.2 3.6-6.7 5-9.8-.3-10.5-4-20-5-5-2.9-12.6-2.5-20-5h-1.6c6.6 4 13 6.5 10 13.4-8.5 0-15.4-1.1-23.3-1.7-8.4-1.6-12.2-3.3-21.6-3.3 9.4-2.3 11.8.2 18.3 3.3 2.4 8-2.8 5-11.7 5-7.6-2.7-12.2-6-21.6-6.7h-20c9.9.4 12 4.1 18.3 8.4.5 2.6-.1 2.4-5 3.3-5.2-4.5-11.9-6-20-8.3-7.9-.3-16.2-1-23.3-3.4-4.9-.3-4.1-6.1 6.7 3.4 6.5 3.8 8.8 7 8.3 10-8.6-2.2-12.8-5.6-18.3-8.4a61.3 61.3 0 00-23.3-3.3c-8.6-2.3.9-3.6 6.6 5 12.4 8.8-1.6 5-6.6 3.3-7.5-2.1-15.3-5.2-21.7-6.6-5-1.5-9.4-2.9-15-3.4 8.7.8 11.6 3.9 15 10 8.8 6-.4 3.1-8.3 1.7-5-4.4-11.5-6.7-15-11.7-8.3-4.1-8.6-9-3.3 1.7 1.3 3.4 1 10.8 1.6 11.7-6.1-6.7-4.8-8.4-11.6-8.4-4.7-3.2-11.5-5.7-15-10-6.4-.6-6.8-2.9-13.3-5 5.3 6.3 12.4 12.5 16.6 18.4 7.6 4.2 9.7 8 15 11.6 2.1 3.7 8 6.7 1.7 1.7-7.2-7-12.5-8.7-23.3-13.3-6.2-5-8.4-7-15-11.7-9-2.9-5.5-4.5 0 5 6.3 5.8 11.1 12.2 16.6 16.7a67.8 67.8 0 0015 13.3c1.5 2.2 6 2.6 0 3.3-5-4.6-12.4-7.5-18.3-11.7-8.3-2.3-12.2-6.6-18.3-11.6-4-5.9-10.4-10.4-15-15-9.6-3.8 1.9 3.6 5 8.3 2.1 6.1 4.8 11 6.6 16.7 2.8 5.5-8.4-1.3-11.6-3.3a57 57 0 00-21.7-8.4 298 298 0 00-20-3.3c-7.5-2 4.1 4.8 8.4 11.7 8.4 7.9-8.3 1.4-13.3 0a125 125 0 00-25-1.7c-10.7.6-3 2 0 6.6 3.3 2.6 5.6 8 5 10-7-1-13-3-21.7-3.3-7 2.3-15.3 1.7-23.3 1.7-.3 4.2 1.5.6 5 5 5.8 2.3 9.6 5.1 8.4 8.3h-48.3c-5.3 1.4 1.1.7 5 6.7-2.2 5.4-5 3.3-11.7 3.3-4.5-1.8-13.6-2.6-18.3-5-4.7 0-4.3-1.2-8.3-1.7 14 10 7 7.5 15 15 1.3.5 4.5 1.7 1.6 1.7M371.3 73.3c-1 0-3.2-5.4-6.6-10-2.4-6-5.4-2.6-8.4-11.7.4-9.4.7-11 0-20-6.8-4.8-9.7-6.2-15-15-8.4-7 1.3-19 2.9-27.8-7.4-1.6-11 11.5-22.3 16.2-8.2 5.5-1-11.4-5-21.2-2.7-13.9-10.8 7-13.8 12.9-5.5 3.7-7.2 8.5-15 1.6 0-5.1 4.9-19.5 2.8-22.3-7.8 3.9-18 15.5-26.1 17.3-8.2-1.7 1.7-14.8 1.7-24.5-3-1-14.7 25.8-19.5 26s-2.7-26-5-25.4c-3.5 5-10.6 15.4-15.5 19-9.5-1.3 1.4-17.5 2.8-23.5 1.6-7.2-8.9 13.8-14.5 15.1-4.1 3.6-12.2 6-15 6.7 3.2-6.2 19-18.7 18-22.3-9.3.3-23.4 12.5-31.3 14-5.2 0-12.4 1.7-13.3 1.6.4-8 19.4-14.6 22.4-19.5-9.3 1.5-27.2 9.7-32.4 16.2-6.2 1.3-14 3-20 0 .9-7.5 14.9-22 18-26.8-8.5 3.7-12.7 6.6-21.7 8.3-1.7 1.7-6.5 5.3-5 1.7 2.7-7 6.7-10 10-15-7.5 1.4-10.3 5.7-18.3 10-5.1.2-19.7 14.9-24.6 15.1a69.1 69.1 0 01-28.3 13.3c-7.6 1.4-11.3 3-15 6.7 3.8-6.7 9.6-13 15-16.6a29.8 29.8 0 0115-13.4c1.9-2.3 7.1-2.9 1.6-3.3-4.7 4.2-12.7 9-16.6 11.7-5.1 3.2-11 6.4-13.4 5 2.7-7.2 7.5-9 11.7-15 8.8-5.6 0-2-6.7 0-4.3 3.8-12 6.7-18.3 10-7 1.8-11.7 6-20 8.3 0 2.4 2.4-4.3 3.4-6.7 6.8-7.4 8.6-9.5 16.6-11.6 2-2.9 4.4-1.7-1.6-1.7-4.6 4-10.8 6.2-16.7 10-5.9 1.3-13.6 1.7-21.6 1.7-10.4 1.2-9.5 2 0-3.4 5.3-5 9.7-3.7 10-10-6.3 4.6-14 8-21.7 11.7-6.4.2-8.1 1.7-15 1.7 3.3-3.4 5.3-7.7 10-10 7-7.7-4.4-1.5-6.7 0h-25c-4.4 5.6-.2 0 3.4-3.4 4.3-2.2 8.8-5.1 8.3-6.6-5 4.3-10.7 6.3-15 10-4.6 1.4-10 2-10 3.3 3.7-5.3 9.6-8.6 13.4-13.3 5.6-1.2 10.4-3 11.6-5h-23.3 16.6c8.5 0 15.7-.8 23.4-1.7 13.2-2.2-1.2-3.3-8.4-3.3-1.3-2.6 4.2-4 10-5C-6.7-69-.4-71.1 5-73.3a45.2 45.2 0 0013.3-6.6c-5 .2-5 1.4-10 1.6 7.5-.5 12.8-1.6 21.7-1.6a239 239 0 0021.6-8.3c3-3.6 4.2-3.4-3.3-3.4 6.7-2.1 16.2-3.2 21.6-5a94 94 0 0020-6.6c4.9-3.3 7.7-7.2 13.3-10 6.5 4.4 6.6 5 18.3 5 9.4-.1 15.2-2.4 20-6.7 7.2-2 8.5-5.4 16.7-6.6a134 134 0 0023.3 1.6c8-2.1 15.7-6 21.6-10 5.1-2.5 11.2-6.1 16.7-8.3 6 3.1 10.8 5.6 18.3 6.7 7.7-1.2 11.8-5 18.3-6.7a28 28 0 0115-8.3c9.7-4.8 9 1.5 13.3 6.6 5 5.2 11.4 2.7 18.3 5 3.9 6 6.7 10 11.7 13.3 3.9 4.8 8.5 6 16.7 6.7 3 4 .6 6.8 6.6 8.3 2.4 2.6 6.5 3.6 10 5"
        fill="none"
        stroke="#772600"
        strokeWidth={3.5}
        transform="matrix(.27 0 0 .32 205.4 104.9)"
      />
      <path
        d="M468.7 30.8v.8c0-2.3 0-1 1.7 3.4.6 3.6-.8 3.2-2.5 5.8-.3 3.7-.8 6.4-.8 10.8-.6 3.6-2.6 7-4.2 10-1.6 3.1-8.5 4.9-8.3 9.2-4 1.1-4.1-1.5-4.2-5.9-2.4-2.7-3.2-6.4-5-10-1-3.4-3.4-6-5-10-2.4-3.7-4.5-4.8-6.6-9.1-.9-2-.7-4.6-2.5-5.8-2.7-3.5-4.5-4-9.2-4.2-3.6.8-5 2.4-8.3 3.3-2.6.9-7.6.6-10.8 1.7-.8 1.3 1.6 2 2.5 5-2.2 1.8-3 4.9-4.2 7.5-2 2.5-3.3 3.7-4.2 7.5 1.4 2.3.2 5.4-1.6 7.5-.6 3.8-2.5 5.9-3.4 9.1-2.6 1.9-3.6 3.6-5.8 6.7-1.9 2.7-3.6 2.5-8.3 2.5-3.7-1-4.2-3-7.5-4.2-.3-1-.6-1.3-1.7-1.6"
        fill="none"
        stroke="#782600"
        strokeWidth={3.1}
        transform="matrix(.27 0 0 .32 205.4 104.9)"
      />
      <path
        d="M307.6 125.5s-.4 5-3.6 8.3-9.8 7.1-9.8 7.1 8.9-4.2 9.8-3.3c1 1-5.7 8.3-5.7 8.3s8.7-7.7 9.8-7.7 3.6 7.5 4.6 7.3c.9-.2-2-9.5-1.6-11 .4-1.4 0-9.3 0-9.3l-3.4.3zm20.5-.6s-.4 5.3-3.6 8.8-9.8 7.6-9.8 7.6 8.9-4.5 9.8-3.5c1 1-5.7 8.8-5.7 8.8s8.7-8.2 9.8-8.2 3.6 8 4.6 7.8c.9-.2-2-10.2-1.6-11.7.4-1.6 0-10 0-10l-3.5.4zm-28.7-48c0 .9-1 1.7-2.1 1.7s-2.2-.8-2.2-1.8 1-1.8 2.2-1.8 2.1.8 2.1 1.8z"
        fill="#812e00"
        fillRule="evenodd"
      />
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const ECFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef));

ECFlagIcon.displayName = 'ECFlagIcon';
