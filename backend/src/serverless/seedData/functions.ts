export const functions = {
  getMenu: {
    handler: "src/functions/getMenu/index.handler",
    events: [
      {
        httpApi: {
          method: "GET",
          path: "/",
        },
      },
    ],
  },
  getKitchenOrders: {
    handler: "src/functions/Admin/getKitchenOrders/index.handler",
    events: [
      {
        httpApi: {
          method: "GET",
          path: "/kitchen",
        },
      },
    ],
  },
  postOrder: {
    handler: "src/functions/postOrder/index.handler",
    events: [
      {
        httpApi: {
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
        httpApi: {
          method: "PATCH",
          path: "/orders/{orderId}/status",
        },
      },
    ],
  },
  createAdmin: {
    handler: "src/functions/Admin/createAdmin/index.handler",
    events: [
      {
        http: {
          method: "POST",
          path: "/admin/create",
        },
      },
    ],
  },
};
