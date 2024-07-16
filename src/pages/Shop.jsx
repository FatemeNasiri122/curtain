import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { item } from "../data/product";
import ItemCart from "../components/ui/ItemCart";
import Ruler from "../components/ui/icons/Ruler";
import Quantity from "../components/ui/Quantity";
import Button from "../components/ui/Button";
import { addToCart } from "../features/user/userSlice";
import Accordion from "../components/ui/Accordion";

const Shop = () => {
    const { isLoggedIn } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [product, setProduct] = useState(item);

    const select = (type, item) => {
        setProduct(prev => {
            return {
                ...prev,
                [type]: item,
            }
        });
    }

    const addToBag = () => {
        dispatch(addToCart(product));
    }

    if (!isLoggedIn) {
        return <Navigate to={"/"} />
    }

    return (
        <div className="mt-4 px-4">
            <div className="grid grid-cols-10 gap-5">
                <div className="col-span-1">
                    {product.images.map(image => <div key={image.id} className="mb-4">
                        <img src={image.img} alt="product-image" className="size-full" />
                    </div>)}
                </div>
                <div className="col-span-5">
                    <img className="w-full" src={product.selectedImage.img} alt="product-image" />
                </div>
                <div className="col-span-4 [&>*]:mb-4 font-medium">
                    <div className="border-b border-b-color-primary [&>*]:mb-4">
                        <p className="font-semibold text-lg uppercase">{product.name}</p>
                        <div>
                            <span>{product.price}</span>
                            <span className="capitalize ml-1">tomans</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="capitalize">color:</span>
                            <span className="capitalize mr-1">{product.selectedColor.name}</span>
                        </div>
                        <div className="flex mt-2">
                            {product.colors.map(color => <button key={color.id}
                                onClick={() => select("selectedColor", color)}
                                className={`size-24 p-1 border-2 
                                ${product.selectedColor.id === color.id ? "border-black" : "border-transparent"}`}>
                                <img alt="color" src={color.img}
                                />
                            </button>)}
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="capitalize">size:</span>
                            <span className="capitalize ml-1">
                                <span className="flex items-center">
                                    {product.selectedSize.name.split(" ")[0]}
                                    <span className="rotate-45 mx-0.5 text-2xl">+</span>
                                    {product.selectedSize.name.split(" ")[1]}
                                </span>
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {product.sizes.map(size => <button
                                key={size.id}
                                onClick={() => { size.available && select("selectedSize", size) }}>
                                <ItemCart disable={!size.available}>
                                    <span className="flex items-center">
                                        {size.name.split(" ")[0]}
                                        <span className="rotate-45 mx-0.5 text-2xl">+</span>
                                        {size.name.split(" ")[1]}
                                    </span>
                                </ItemCart>
                            </button>)}
                        </div>
                        <div className="flex items-center mt-2">
                            <Ruler />
                            <span className="capitalize underline ml-2 tracking-widest font-normal text-sm">measuring guide</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="capitalize">lining:</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {product.linings.map(lining => <ItemCart key={lining.id} disable={false}>
                                {lining.name}
                            </ItemCart>)}
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="uppercase">qty:</span>
                        </div>
                        <Quantity
                            number={product.quantity}
                            onMinus={() => { product.quantity > 1 && select("quantity", product.quantity - 1) }}
                            onPlus={() => select("quantity", product.quantity + 1)} />
                    </div>
                    <Button
                        varient={"primary"}
                        type={"button"}
                        onClick={addToBag}
                    >
                        add to bag
                    </Button>
                    <Button varient={"outline"} type={"button"}>
                        save to watchlist
                    </Button>
                    <div>
                        <Accordion title={"product discription"} content={product.discription} />
                        <Accordion title={"dimensions"} content={product.dimensions} />
                        <Accordion title={"material & care"} content={product.materialAndCare} />
                        <Accordion title={"shippings & return"} content={product.shippingsAndReturn} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;