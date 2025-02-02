![image](https://github.com/user-attachments/assets/0628f981-60d1-4b8b-80a0-bd70e1231d18)
# Bugs

1. **Null Response**

   ![Screenshot 2025-02-02 193531](https://github.com/user-attachments/assets/4c82804f-dbbf-4e9b-b5bc-3cf7ac42d1ac)


   ```
   const router = express.Router();

   router.get("/", getPosts);
   router.get("/:slug", getPost);
   router.post("/create", createPost);
   router.get("/test", (req, res) => res.send("hello"));

   export default router;

   ```

This was caused by the order of routes above, the get route with a variable slug, it is a dynamic route, the rest are static routes, dynamic routes should be put last , this solved the issue.

```
const router = express.Router();

router.get("/", getPosts);
router.post("/create", createPost);
router.get("/test", (req, res) => res.send("hello"));
router.get("/:slug", getPost);

```

![Screenshot 2025-02-02 194040](https://github.com/user-attachments/assets/52841391-923e-4e14-b24d-a580240e1f12)

