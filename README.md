![image](https://github.com/user-attachments/assets/0628f981-60d1-4b8b-80a0-bd70e1231d18)
# Bugs

1. **Null Response**

   ![1738514139578](image/README/1738514139578.png)

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


![1738514482790](image/README/1738514482790.png)
