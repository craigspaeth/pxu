import {
  columns,
  layout,
  columnList,
  colors,
  type,
  margins,
  gutterSize,
  footerHeight,
  navHeight
} from '../lib/styles'
import Blurb from './blurb'
import ContactForm from '../components/contact-form'
import Arrow from '../components/arrow'
import Waypoint from 'react-waypoint'
import _ from 'lodash'
import { debug } from 'util'

export default class extends React.Component {
  shouldComponentUpdate () {
    if (this.animating) return false
    this.refs.container.className = this.props.scrollingUp
      ? 'animation-container hidden'
      : 'animation-container ' +
          (this.props.animationIndex
            ? _.times(this.props.animationIndex + 1, i => 'step' + i).join(' ')
            : 'step0')
    return false
  }

  render () {
    return (
      <div
        ref='container'
        onTransitionStart={() => (this.animating = true)}
        onTransitionEnd={() => (this.animating = false)}
      >
        <div className='indicator' />
        <div className='half-circle'>
          <svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M98.5 1.511C45.29 2.306 2.306 45.291 1.511 98.5H98.5V1.511z'
              stroke={colors.gray3}
              stroke-width='3'
              fill='none'
              fill-rule='evenodd'
            />
          </svg>
        </div>
        <div className='box' />
        <div className='circle' />
        <div className='horn'>
          <svg width='133' height='60' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1.5 1.5v47.318L124.899 1.5H1.5z'
              stroke={colors.gray3}
              stroke-width='3'
              fill='none'
              fill-rule='evenodd'
            />
          </svg>
        </div>
        <div className='box-two' />
        <style jsx global>{`
        @keyframes hornbounce {
          0% {
            transform: scaleX(0.05);
          }
          50% {
            transform: scaleX(1.2);
          }
          100% {
            transform: scaleX(1);
          }
        }
        @keyframes half-circle-wiggle {
          0% {
            transform: translateX(-280px);
          }
          10%, 80% {
            transform: translateX(-280px) rotateZ(-5deg);
          }
          20%, 70% {
            transform: translateX(-280px) rotateZ(10deg);
          }
          20%, 40%, 60% {
            transform: translateX(-280px) rotateZ(-20deg);
          }
          30%, 50% {
            transform: translateX(-280px) rotateZ(20deg);
          }
          90%, 100% {
            transform: translateX(-280px) rotateZ(0deg);
          }
        }
        @keyframes box-wiggle {
          10%, 80% {
            transform: translateX(-140px) rotateZ(4deg);
          }
          20%, 70% {
            transform: translateX(-140px) rotateZ(-11deg);
          }
          20%, 40%, 60% {
            transform: translateX(-140px) rotateZ(22deg);
          }
          30%, 50% {
            transform: translateX(-140px) rotateZ(-19deg);
          }
          90%, 100% {
            transform: translateX(-140px) rotateZ(0deg);
          }
        }
        @keyframes circle-wiggle {
          10%, 80% {
            transform: translateY(-5px);
          }
          20%, 70% {
            transform: translateY(10px);
          }
          20%, 40%, 60% {
            transform: translateY(-20px);
          }
          30%, 50% {
            transform: translateY(20px);
          }
          90%, 100% {
            transform: translateY(0px);
          }
        }
        @keyframes horn-wiggle {
          0%, 100% {
            transform-origin: 0% 0%;
          }
          10%, 80% {
            transform: translateX(140px) rotateZ(-2deg);
          }
          20%, 70% {
            transform: translateX(140px) rotateZ(5deg);
          }
          20%, 40%, 60% {
            transform: translateX(140px) rotateZ(-7deg);
          }
          30%, 50% {
            transform: translateX(140px) rotateZ(6deg);
          }
          90%, 100% {
            transform: translateX(140px) rotateZ(0deg);
          }
        }
        @keyframes box-two-wiggle {
          10%, 80% {
            transform: translateX(300px) translateY(3px) rotateZ(2deg);
          }
          20%, 70% {
            transform: translateX(300px) translateY(15px) rotateZ(-5deg);
          }
          20%, 40%, 60% {
            transform: translateX(300px) translateY(0px) rotateZ(2deg);
          }
          30%, 50% {
            transform: translateX(300px) translateY(25px) rotateZ(-7deg);
          }
          90%, 100% {
            transform: translateX(300px) translateY(0px) rotateZ(0deg);
          }
        }
        @keyframes half-circle-into-place {
          0% {
            transform: scale(1) translate(-280px, 0);
          }
          100% {
            transform: scale(1.79) translate(-33px, 33.5px);
          }
        }
        @keyframes half-circle-path-into-place {
          0% {
            stroke: ${colors.green1};
            stroke-width: 3px;
          }
          100% {
            stroke: ${colors.gray3};
            stroke-width: 2.7px;
          }
        }
        @keyframes box-into-place {
          0% {
            transform: scale(1) translate(-140px, 0);
            border-color: ${colors.red1};
            border-width: 3px;
          }
          100% {
            transform: translateX(0px) rotateZ(0deg) scale(3);
            border-color: ${colors.gray3};
            border-width: 2px;
          }
        }
        @keyframes circle-into-place {
          0% {
            transform: scale(1) translate(0, 0);
            border-width: 3px;
          }
          100% {
            transform: scale(1.1) translate(22px, 24px);
            border-color: ${colors.gray3};
            border-width: 4.4px;
          }
        }
        @keyframes horn-into-place {
          0% {
            transform: scale(1) translate(140px, 0);
          }
          100% {
            transform: scale(0.95) translate(74px, 16px);
          }
        }
        @keyframes horn-path-into-place {
          0% {
            stroke: ${colors.yellow1};
            stroke-width: 3px;
          }
          100% {
            stroke: ${colors.gray3};
            stroke-width: 5px;
          }
        }
        @keyframes box-two-into-place {
          0% {
            transform: scale(1) translate(300px, 0);
            border-color: ${colors.red1};
            border-width: 3px;
          }
          100% {
            transform: scale(0.75) translate(48px, 107px);
            border-color: ${colors.gray3};
            border-width: 6px;
          }
        }
        @keyframes container-into-place {
          0% {
            transform: scale(0.7) rotate(0deg);
            margin: 0;
          }
          100% {
            transform: scale(0.7) rotate(360deg);
            margin: 0 0 0 calc(50% + 15px);
          }
        }
        .animation-container {
          height: 500px;
          width: 100%;
          top: calc(50% - 250px);
          max-width: inherit;
          z-index: -1;
          position: sticky;
          justify-content: space-evenly;
          align-items: center;
          transition: opacity 0.3s, transform 0.5s ease-in-out;
          transform: translate3d(0, 0, 0);
          display: flex;
          margin-right: ${margins.l}px;
          margin-left: -30px;
        }
        .animation-container.hidden {
          display: none;
        }
        .animation-container .half-circle,
        .animation-container .box,
        .animation-container .circle,
        .animation-container .horn,
        .animation-container .box-two {
          width: 100px;
          height: 100px;
          border: 3px solid ${colors.gray3};
          position: absolute;
          opacity: 0;
        }
        .animation-container .circle {
          transition:
            transform 1s cubic-bezier(0.645, 0.045, 0.355, 1.000) 0.7s,
            border-radius 1s  cubic-bezier(0.645, 0.045, 0.355, 1.000) 0.7s;
          transform: rotateZ(0deg);
        }
        .animation-container .box {
          transition: opacity 0.3s ease-in, transform 1s cubic-bezier(0.860, 0.000, 0.070, 1.000);
        }f
        .animation-container .horn {
          transition: transform 0.3s cubic-bezier(0.860, 0.000, 0.070, 1.000), opacity 0.3s ease-in;
          transform: translateX(80px);
          border: 0;
        }
        .animation-container .horn svg {
          content: '.';
          opacity: 0;
          color: transparent;
          display: block;
          transform: scaleX(0.05);
          transform-origin: 0% 0%;
          transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) 0.5s, opacity 0.3 ease-in;
        }
        .animation-container .half-circle {
          border: 0;
        }
        .animation-container .half-circle {
          opacity: 0;
          transform: translateX(-100vw);
          transition: transform 0.7s cubic-bezier(0.860, 0.000, 0.070, 1.000), opacity 0.3s ease-in-out;
        }
        .animation-container .box-two {
          opacity: 0;
          transform: translateX(100vw);
          transition: transform 0.7s cubic-bezier(0.860, 0.000, 0.070, 1.000), opacity 0.3s ease-in-out;
        }
        .animation-container.step0 {
          opacity: 0;
        }
        .animation-container.step1 {
          opacity: 1;
        }
        .animation-container.step1 .box {
          opacity: 1;
        }
        .animation-container.step2 .circle {
          opacity: 1;
          transform: rotateZ(720deg);
          border-radius: 100%;
        }
        .animation-container.step2 .box {
          opacity: 1;
          transform: translateX(-140px);
        }
        .animation-container.step3 .horn {
          opacity: 1;
          transform: translateX(140px);
          border-color: transparent;
        }
        .animation-container.step3 .horn svg {
          transform: scaleX(1);
          opacity: 1;
          animation: hornbounce 0.5s ease-in-out forwards;
        }
        .animation-container.step4 .half-circle {
          animation: half-circle-wiggle 2s  cubic-bezier(.36,.07,.19,.97) infinite;
        }
        .animation-container.step4 .box {
          animation: box-wiggle 2s  cubic-bezier(.36,.07,.19,.97) infinite;
        }
        .animation-container.step4 .circle {
          animation: circle-wiggle 2s  cubic-bezier(.36,.07,.19,.97) infinite;
        }
        .animation-container.step4 .horn {
          animation: horn-wiggle 2s  cubic-bezier(.36,.07,.19,.97) infinite;
        }
        .animation-container.step4 .box-two {
          animation: box-two-wiggle 2s  cubic-bezier(.36,.07,.19,.97) infinite;
        }
        .animation-container.step4 {
          transform: scale(0.7);
          overflow-x: visible;
        }
        .animation-container.step4 .half-circle * {
          stroke: ${colors.green1};
        }
        .animation-container.step4 .half-circle {
          opacity: 1;
        }
        .animation-container.step4 .box-two {
          transform: translateX(300px);
          opacity: 1;
        }
        .animation-container.step4 .box {
          border-color: ${colors.red1};
        }
        .animation-container.step4 .circle {
          border-color: ${colors.blue1};
        }
        .animation-container.step4 .horn * {
          stroke: ${colors.yellow1};
        }
        .animation-container.step4 .box-two {
          border-color: ${colors.red1}
        }
        .animation-container.step5 {
          animation: container-into-place 0.6s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards;
        }
        .animation-container.step5 .half-circle {
          animation: half-circle-into-place 0.6s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards;
        }
        .animation-container.step5 .half-circle svg path {
          animation: half-circle-path-into-place 0.6s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards;
        }
        .animation-container.step5 .box {
          animation: box-into-place 0.6s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards;
        }
        .animation-container.step5 .circle {
          animation: circle-into-place 0.6s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards;
        }
        .animation-container.step5 .horn {
          animation: horn-into-place 0.6s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards;
        }
        .animation-container.step5 .horn svg path {
          animation: horn-path-into-place 0.6s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards;
        }
        .animation-container.step5 .box-two {
          animation: box-two-into-place 0.6s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards;
        }
        @media screen and (max-width: 1080px) {
          .animation-container {
            transform: scale(0.9);
          }
          .animation-container.step4 {
            transform: scale(0.6);
          }
        }
        @media screen and (max-width: 950px) {
          .animation-container {
            transform: scale(0.8);
          }
          .animation-container.step4 {
            transform: scale(0.5);
          }
        }
        @media screen and (max-width: 850px) {
          .animation-container {
            transform: scale(0.7);
          }
          .animation-container.step4 {
            transform: scale(0.4);
          }
        }
      `}</style>
      </div>
    )
  }
}
