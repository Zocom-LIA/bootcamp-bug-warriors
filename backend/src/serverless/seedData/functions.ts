export const functions = {
  getMenu: {
    handler: 'src/functions/getMenu/index.handler',
    events: [
      {
        httpApi: {
          method: 'GET',
          path: '/',
        },
      },
    ],
  },
  postOrder: {
    handler: 'src/functions/postOrder/index.handler',
    events: [
      {
        httpApi: {
          method: 'POST',
          path: '/order',
        },
      },
    ],
  },
  updateOrderStatus: {
    handler: 'src/functions/updateOrderStatus/index.handler',
    events: [
      {
        httpApi: {
          method: 'PATCH',
          path: '/orders/{orderId}/status',
        },
      },
    ],
  },
};
