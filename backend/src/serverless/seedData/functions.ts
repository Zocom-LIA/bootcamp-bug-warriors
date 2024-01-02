export const functions = {
  getMenu: {
    handler: "src/functions/getMenu/index.handler",
    events: [
      {
        http: {
          method: "GET",
          path: "/",
        },
      },
    ],
  },
  postOrder: {
    handler: "src/functions/postOrder/index.handler",
    events: [
      {
        http: {
          method: "POST",
          path: "/order",
        },
      },
    ],
  },
  updateOrderStatus: {
    handler: "src/functions/updateOrderStatus/index.handler",
    events: [
      {
        http: {
          method: "PATCH",
          path: "/orders/{orderId}/status",
        },
      },
    ],
  },
};