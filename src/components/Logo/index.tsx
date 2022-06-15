import logo from '../../images/logo-icon.svg';
export const Logo = ({height,width}:{height: string;width: string;}) => {
   return (
           <img src={logo} alt="Aibomed" style={{height:height,width:width}}/>
   )
}