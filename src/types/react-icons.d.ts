import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib';

declare module 'react-icons/lib' {
  // IconBaseProps'a className eklemek için genişletme
  export interface IconBaseProps {
    className?: string;
  }
}

declare module 'react-icons/fa' {
  export const FaBars: IconType;
  export const FaTimes: IconType;
  export const FaPhone: IconType;
  export const FaEnvelope: IconType;
  export const FaMapMarkerAlt: IconType;
  export const FaFacebook: IconType;
  export const FaTwitter: IconType;
  export const FaInstagram: IconType;
  export const FaTruck: IconType;
  export const FaMoneyBillWave: IconType;
  export const FaHeadset: IconType;
  export const FaShieldAlt: IconType;
} 