
import { ThemeProvider } from 'styled-components';
import { useAdminContext } from '../AdminContext';

import CartItemCardTypeA from '../../components/Public/Cart/Total/cartItemCard/CartItemCardTypeA';
import CartItemCardTypeB from '../../components/Public/Cart/Total/cartItemCard/CartItemCardTypeB';
import CartItemCardTypeC from '../../components/Public/Cart/Total/cartItemCard/CartItemCardTypeC';
import CartItemCardTypeD from '../../components/Public/Cart/Total/cartItemCard/CartItemCardTypeD';
import CartItemCardTypeE from '../../components/Public/Cart/Total/cartItemCard/CartItemCardTypeE';
import CartItemCardTypeF from '../../components/Public/Cart/Total/cartItemCard/CartItemCardTypeF';

import { themes } from '../All_themes'; 


const cartItemCardMap = {
  typeA: CartItemCardTypeA,
  typeB: CartItemCardTypeB,
  typeC: CartItemCardTypeC,
  typeD: CartItemCardTypeD,
  typeE: CartItemCardTypeE,
  typeF: CartItemCardTypeF,
};

const ContainerTypeCartItemCard = ({ id, image, title, price, quantity = 0, color, size, colorHex, variantId, showButtons }) => {
  const { themeChoice, cartItemCardComponent ,loadingSettings} = useAdminContext();
  if (loadingSettings) {
    return <div>Loading...</div>;
  }
  console.log('themeChoice',themeChoice);
  const selectedTheme = themes[themeChoice] || themes.light;
  const CartItemCardComponent = cartItemCardMap[cartItemCardComponent] || CartItemCardTypeA;
  return (
    <ThemeProvider theme={selectedTheme}>
      <div>
        <CartItemCardComponent
          id={id}
          image={image}
          title={title}
          price={price}
          quantity={quantity}
          color={color}
          size={size}
          colorHex={colorHex}
          variantId={variantId}
          showButtons={showButtons}
  
        />
      </div>
    </ThemeProvider>
  );
};

export default ContainerTypeCartItemCard;
