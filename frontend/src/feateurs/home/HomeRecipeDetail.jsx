import { useParams } from "react-router-dom";
import images from "../../assets/images";
import "./homeRecipeDetail.scss";
import { FaRegStar } from "react-icons/fa";
import Button from "../../components/Button";
import { topsale } from "../../constants/data";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getMenu } from "../../srevices/apiMenu";

const HomeRecipeDetail = () => {
  const { id: recipeId } = useParams();

    // Queries
    const query = useQuery({ queryKey: ["menus"], queryFn: getMenu });

    // Mutations
    const mutation = useMutation({
      mutationFn: getMenu,
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ["menus"] });
      },
    });
  const singleRecipe = query.data?.filter(({ _id }) => _id == recipeId);
  console.log(singleRecipe)
  return (
    <div className="HomeRDContainer">
      <div className="HomeRDTop">
        <img src={images.bgImage} alt="blog" />
        <div className="title">
          <h2>Recipe Details</h2>
        </div>
      </div>
      <div className="recipeInfo">
        <div className="left">
          <div className="recipeImg">
            <img src={`http://localhost:8000/${singleRecipe[0].image}`}  alt="" />
          </div>
          <h3>{singleRecipe[0].title}</h3>
          <p>
            By <span>Thang </span> * Posted November 9, 2015 * On{" "}
            <span>Chocolate</span> * <span>2 comments</span>
          </p>
          <div className="prepationTime">
            <div className="items">
              <div className="icon">icons</div>
              <div className="time">
                <p>Prepation time</p>
                <p>5 minutes</p>
              </div>
            </div>
            <div className="items">
              <div className="icon">icons</div>
              <div className="time">
                <p>Cook time</p>
                <p>15 minutes</p>
              </div>
            </div>
            <div className="items">
              <div className="icon">icons</div>
              <div className="time">
                <p>Yield</p>
                <p>6 Rolls</p>
              </div>
            </div>
            <div className="items">
              <div className="icon">icons</div>
              <div className="time">
                <p>Serving for</p>
                <p>Family</p>
              </div>
            </div>
          </div>
          <div className="recipeSteps">
            <div className="instructions">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="step">
                <input type="checkbox" id="check" />
                <label htmlFor="check">Step1</label>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="step">
                <input type="checkbox" id="check" />
                <label htmlFor="check">Step2</label>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="step">
                <input type="checkbox" id="check" />
                <label htmlFor="check">Step3</label>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="ingridients">
              <div className="rading">
                <h3>Recipe rating</h3>
                <p>***** (5 Ratings)</p>
              </div>
              <div className="ingredientItems">
                <h3>Ingredients</h3>
                <div className="item">
                  <input type="checkbox" id="check" />
                  <label htmlFor="check">60 ml vodka</label>
                </div>
                <div className="item">
                  <input type="checkbox" id="check" />
                  <label htmlFor="check">3 tbsp Kahlua</label>
                </div>
                <div className="item">
                  <input type="checkbox" id="check" />
                  <label htmlFor="check">2 tbsp cream</label>
                </div>
                <div className="item">
                  <input type="checkbox" id="check" />
                  <label htmlFor="check">3 eggs</label>
                </div>
                <div className="item">
                  <input type="checkbox" id="check" />
                  <label htmlFor="check">1 teaspoon lemon zest</label>
                </div>
                <div className="item">
                  <input type="checkbox" id="check" />
                  <label htmlFor="check">5 cup sliced stawberries</label>
                </div>
                <div className="item">
                  <input type="checkbox" id="check" />
                  <label htmlFor="check">1/2 teaspoon salt</label>
                </div>
                <div className="item">
                  <input type="checkbox" id="check" />
                  <label htmlFor="check">1 cup heavy cream</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="sideBar">
            <div className="searchBar">
              <input type="text" placeholder="Search Product" />
            </div>
            <h2>Product Categories</h2>
            <div className="btnProduct">
              <Button title="Apple" btnValue={2} />
            </div>
            <div className="btnProduct">
              <Button title="Celebration" btnValue={14} />
            </div>
            <div className="btnProduct">
              <Button title="Chocolate" btnValue={15} />
            </div>
            <div className="btnProduct">
              <Button title="Cupcake" btnValue={17} />
            </div>
            <div className="btnProduct">
              <Button title="Desserts" btnValue={11} />
            </div>
            <div className="btnProduct">
              <Button title="Uncategorized" btnValue={2} />
            </div>
            <div className="filterPrice">
              <h3>Filter By Price</h3>
              <input type="range" className="intput-range" />
              <div className="price">
                <p>Price: $0-$20</p>
                <p>filter</p>
              </div>
            </div>
            <div className="topSale">
              <h3>Top Sale Products</h3>

              {topsale.map(({ id, image, title, price }) => {
                return (
                  <div className="topSaleProduct" key={id}>
                    <img src={`http://localhost:8000/${singleRecipe[0].image}`} alt="" />
                    <div className="productInfo">
                      <p>{title}</p>
                      <p>
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                      </p>
                      <p>${price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRecipeDetail;
