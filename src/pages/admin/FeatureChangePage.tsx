import { useState, useEffect } from 'react';
import FeatureProductForm from "../../components/forms/products/FeatureProductForm";
import FeatureProductDto from "../../models/products/feature-product.model";
import { productService } from '../../services/product.service';
import { useNavigate, useParams } from 'react-router-dom';

export function FeatureChangePage() {
  const [featureUpdate, setFeatureUpdate] = useState(new FeatureProductDto());

  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(() =>{
    productService.getProductById(id!)
      .then(productApiRes => {
        const product = productApiRes?.product
        setFeatureUpdate(prev => ({...prev,
          name: product?.name,
          company: product?.company,
          price: product?.price,
          featured: product?.featured,
          id: product?.id
        }) as FeatureProductDto)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const featureProductUpdateHandler = (featureDto: FeatureProductDto) => {
    console.log("feature-update, product : ", featureDto)
    productService.editProductFeature(featureDto)
      .then(() => navigate("/list-product"))
      .catch(error => console.log(error))
  }

  const backToListHandler = () => {
    navigate("/list-product")
  }

  return (
    <FeatureProductForm
    initialValue={featureUpdate}
    onBackToList={backToListHandler}
    onProductHandler={featureProductUpdateHandler}
    />
  )
}
