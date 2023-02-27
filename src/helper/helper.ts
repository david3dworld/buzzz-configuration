/* eslint-disable camelcase */
export const getRelativeCoordinates = (event: any, referenceElement: any) => {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  };
};

export const calcCartTotal = (cartArray: any) => {
  if (!cartArray) return '₦ 0';
  let total: number = 0;
  cartArray.forEach((item: any) => {
    const currTotal = item?.total || item?.price;
    total += parseInt(currTotal, 10);
  });
  return `₦ ${total}`;
};

export const formatShippingAddress = (address: any) => {
  if (!address) return '';
  const { street_number, street, LGA, state } = address;
  return `${street_number}, ${street} ${LGA} ${state}`;
};

export const formatDateTime = (date: Date) => {
  // const hour = new Intl.DateTimeFormat("en-US", {
  //   hour: "numeric",
  //   hour12: false,
  // }).format(date);
  // const min = new Intl.DateTimeFormat("en-US", { minute: "numeric" }).format(
  //   date
  // );
  const format = new Date(date);
  const hour = format.getHours();
  const min = format.getMinutes();
  const formatHour = hour.toString().length === 1 ? `0${hour}` : hour;
  const formatMin = min.toString().length === 1 ? `0${min}` : min;
  return `${format.getFullYear()}-${format.getMonth()}-${format.getDate()} | ${formatHour}:${formatMin}`;
};

export const getCartDetails = (arr: any[]) => {
  const newArr = arr.map((el: any) => {
    return {
      quantity: el.quantity,
      product: el.product.id,
    };
  });
  return newArr;
};
