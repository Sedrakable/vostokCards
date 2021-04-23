import React from "react";
import "../css/ProductPage.css";

const ProductPage = ({ item }) => {
  return (
    <div className="ProductPage">
      <div className="new_box product_box">
        <div className="imageWrap_left">
          <div className="left_side ">
            <div className="left_trapeeze"></div>
            <div className="border_trapeeze_left"></div>
            <div className="text_holder">
              {item.logo}
              <p className="description_text text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vehicula suscipit auctor. Suspendisse potenti. Maecenas
                vestibulum pellentesque metus et aliquam. Sed a malesuada nibh,
                at congue enim. Donec luctus mauris finibus aliquet euismod.
                Duis eu tempor felis. Fusce sagittis elit in ante posuere, eget
                maximus quam tristique. Nunc augue mauris, eleifend vitae
                molestie id, placerat quis arcu. Proin vitae finibus lorem,
                vitae aliquam augue. Pellentesque vel posuere urna. Cras
                molestie nisl vel odio bibendum ullamcorper. Proin varius turpis
                est, eu egestas ligula tristique ac. Sed vitae velit aliquet,
                scelerisque orci id, rhoncus enim. Aliquam at fermentum velit,
                id fringilla mauris. Vestibulum varius commodo quam eget
                eleifend. Mauris dictum suscipit enim ut dignissim. In ac dictum
                mi.
              </p>
            </div>
          </div>

          <img className="Image " src={item.image} />
        </div>
      </div>
      <div className="new_box product_box">
        <div className="imageWrap_right">
          <div className="right_side ">
            <div className="right_trapeeze"></div>
            <div className="border_trapeeze_right"></div>
            <div className="text_holder">
              {item.logo}
              <p className="description_text text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vehicula suscipit auctor. Suspendisse potenti. Maecenas
                vestibulum pellentesque metus et aliquam. Sed a malesuada nibh,
                at congue enim. Donec luctus mauris finibus aliquet euismod.
                Duis eu tempor felis. Fusce sagittis elit in ante posuere, eget
                maximus quam tristique. Nunc augue mauris, eleifend vitae
                molestie id, placerat quis arcu. Proin vitae finibus lorem,
                vitae aliquam augue. Pellentesque vel posuere urna. Cras
                molestie nisl vel odio bibendum ullamcorper. Proin varius turpis
                est, eu egestas ligula tristique ac. Sed vitae velit aliquet,
                scelerisque orci id, rhoncus enim. Aliquam at fermentum velit,
                id fringilla mauris. Vestibulum varius commodo quam eget
                eleifend. Mauris dictum suscipit enim ut dignissim. In ac dictum
                mi.
              </p>
            </div>
          </div>

          <img className="Image " src={item.image} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
