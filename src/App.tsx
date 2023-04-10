import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";
import { addProduct, deleteProduct, getAllProduct } from "./api/product";
import Products from "./pages/Products";
import ClientLayout from "./pages/layouts/ClientLayout";
import ProductDetail from "./pages/ProductDetail";
import AdminLayout from "./pages/layouts/AdminLayout";
import DashBoard from "./pages/admin/DashBoard";
import ListProduct from "./pages/admin/ListProduct";
import AddProduct from "./pages/admin/AddProduct";
import UpdateProduct from "./pages/admin/UpdateProduct";
import { updateProduct } from "./api/product";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import { signIn, signUp } from "./api/user";
//type product
import { IProduct } from "./types/product";
import { ICategory } from "./types/category";
// type user
import { SignInUser, SignUpUser, UserLogged } from "./types/user";
import PageNotFound from "./pages/PageNotFound";
import ListCategory from "./pages/admin/ListCategory";
import AddCategory from "./pages/admin/AddCategory";
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "./api/category";
import UpdateCategory from "./pages/admin/UpdateCategory";
import { message } from "antd";


function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [user, setUser] = useState<UserLogged>();
  const [keyword, setKeyword] = useState('')
  const [keywordCategory, setKeywordCategory] = useState('')

  //GET ALL PRODUCT
  useEffect(() => {
    (async () => {
      try {
        const { data } = await getAllProduct(keyword);
        console.log('data',data);
        setProducts(data.docs);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [keyword]);

  // ADD PRODUCT
  const onHandleAddProduct = async (product_param: IProduct) => {
    try {
      const { data } = await addProduct(product_param);
      const product = data.data
      alert("Thêm sản phẩm thành công");
      if (products) {
        setProducts([...products, product]);
      } else {
        setProducts([product]);
      }
      navigate("/admin/products");
    } catch (error: any) {
      alert(error.response?.data.map((err: any) => err.message))
    }
  };

  // UPDATE PRODUCT
  const onHandleUpdateProduct = async (product_param: IProduct) => {
    try {
      const { data } = await updateProduct(product_param);
      console.log('data update products', data);
      
      const  {productUpdated}  = data;
      console.log(productUpdated);
      
      setProducts(
        products.map((product) =>
          product._id == productUpdated._id ? productUpdated : product
        )
      );
      alert("Cập nhật sản phẩm thành công");
      navigate("/admin/products");
    } catch (error: any) {
      alert(error.response?.data.message.map((err: any) => err))
    }
  };

  //DELETE PRODUCT
  const onHandleDeleteProduct = async (id: string) => {
    try {
      const confirmDel = window.confirm("Bạn có chắc chắn xóa sản phẩm này ?");
      if (confirmDel) {
        await deleteProduct(id);
        setProducts(products.filter((product) => product._id != id));
        alert("Xóa sản phẩm thành công");
      }
    } catch (error: any) {
      alert(error.response?.data.message.map((err: any) => err))
    }
  };

  // SIGN UP
  const onHandleSignUp = async (data_user: SignUpUser) => {
    try {
      const { data } = await signUp(data_user);
      const { token } = data;
      alert("Đăng ký tài khoản thành công. Vui lòng đăng nhập🤗");
      navigate("/signin");
    } catch (error: any) {
      console.log(error);
      
      alert(error.response?.data.message)
    }
  };

  //SIGN IN
  const onHandleSignIn = async (data_user: SignInUser) => {
    try {
      const { data: user } = await signIn(data_user);
      console.log('data',user);
      
      localStorage.setItem("accessToken", JSON.stringify(user.accessToken));
      localStorage.setItem("user", JSON.stringify(user.data));
      alert("Đăng nhập tài khoản thành công");
      user.data.role == "admin" ? navigate("/admin") : navigate("/");
    } catch (error: any) {
      alert("Lỗi : " + error);
    }
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")!));
  }, [localStorage.getItem("user")]);

  // GET ALL CATEGORY
  useEffect(() => {
    (async () => {
      try {
        const { data } = await getAllCategory(keywordCategory);
        console.log('category',data);
        
        setCategories(data.docs);
      } catch (error: any) {
        alert(error.response?.data.message.map((err: any) => err))
      }
    })();
  }, [keywordCategory]);

  // ADD CATEGORY
  const onHandleAddCategory = async (category_param: ICategory) => {
    try {
      const { data } = await addCategory(category_param);
      const { category } = data;
      if (categories) {
        setCategories([...categories, category]);
      } else {
        setCategories([category]);
      }
      alert("Thêm danh mục thành công");
      navigate("/admin/categories");
    } catch (error: any) {
      alert(error.response?.data.message.map((err: any) => err))
    }
  };

  // UPDATE CATEGORY
  const onHandleUpdateCategory = async (category_param: ICategory) => {
    try {
      const { data } = await updateCategory(category_param);
      console.log("data categori", data);
      
      const { category: categoryUpdated } = data;
      
      setCategories(
        categories.map((category) =>
          category._id === categoryUpdated._id ? categoryUpdated : category
        )
      );
      alert("Cập nhật danh mục thành công");
      navigate("/admin/categories");
    } catch (error: any) {
      alert(error.response?.data.message.map((err: any) => err))
    }
  };

  // DELETE CATEGORY
  const onHandleRemoveCategory = async (id: string) => {
    try {
      const confirmDel = window.confirm("Bạn có chắc chắn muốn xóa danh mục này ?");
      if (confirmDel) {
        await deleteCategory(id);
        setCategories(categories.filter((category) => category._id !== id));
        alert("Xóa danh mục thành công");
      }
    } catch (error: any) {
      alert(error.response?.data.map((err: any) => err.message))
    }
  };
  return (
    <div className="App">
      <Routes>
        {/* CLIENT */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route index element={<Products products={products} />} />
            <Route
              path=":id"
              element={
                <ProductDetail products={products} categories={categories} />
              }
            />
          </Route>
          <Route
            path="/signup"
            element={<SignUp onSignUp={onHandleSignUp} />}
          />
          <Route
            path="/signin"
            element={<SignIn onSignIn={onHandleSignIn} />}
          />
        </Route>
        {/* END CLIENT */}

        {/* ADMIN */}
        <Route path="/admin" element={<AdminLayout user={user!} />}>
          <Route index element={<DashBoard />} />
          {/* products */}
          <Route path="products">
            <Route
              index
              element={
                <ListProduct
                  products={products}
                  categories={categories}
                  onDelete={onHandleDeleteProduct}
                  onKeyWord={setKeyword}
                />
              }
            />
            <Route
              path="add"
              element={
                <AddProduct
                  onAdd={onHandleAddProduct}
                  categories={categories}
                />
              }
            />
            <Route
              path=":id/update"
              element={
                <UpdateProduct
                  onUpdate={onHandleUpdateProduct}
                  products={products}
                  categories={categories}
                />
              }
            />
          </Route>
          {/*end products */}

          {/* categories */}
          <Route path="categories">
            <Route
              index
              element={
                <ListCategory
                  categories={categories}
                  onDelete={onHandleRemoveCategory}
                  onKeyWord={setKeywordCategory}
                />
              }
            />
            <Route
              path="add"
              element={<AddCategory onAdd={onHandleAddCategory} />}
            />
            <Route
              path=":id/update"
              element={
                <UpdateCategory
                  categories={categories}
                  onUpdate={onHandleUpdateCategory}
                />
              }
            />
          </Route>
          {/* end categories */}
        </Route>
        {/* END ADMIN */}

        {/* NOT FOUND ROUTE */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
