{
  /* <script>
import { AxiosGet, AxiosPost } from "../services/useAxios";
import conf from "../config.json";
import { CardShimmer } from "vue3-shimmer";
// import { reactive } from "vue";
const defaultItemNums = 8;
export default {
  data() {
    return {
      foodItems: {},
      viewLength: defaultItemNums,
      showViewMoreButton: false,
    };
  },
  components: {
    CardShimmer,
  },
  methods: {
    getWhatsappProducts() {
      console.log("getting prods");
      // return AxiosGet(conf.base_url + "/GetWhatsappProducts", {
      //   region: "LG",
      // })
      const payload = { keyword: "a", user_id: "165843" };
      return AxiosPost(conf.base_url + "/whatsappSearchFoodItems", payload, {
        region: "LG",
        Authorization: `Bearer ${conf.access_token}`,
      }).then((res) => {
        this.foodItems = res.data.fooditems;
        console.log(this.foodItems, res.data.fooditems, res);
        // this.foodItems = res.data;
        // console.log(this.foodItems, res.data);
        this.checkListComplete();
        // foodItems = a.data;
        // console.log(foodItems);
      });
    },
    viewMore() {
      console.log("viewmore length is", this.viewLength);
      this.viewLength += defaultItemNums;
      this.checkListComplete();
    },
    checkListComplete() {
      const length = this.foodItems?.length ? this.foodItems.length : 0;
      console.log("this data length is", length);
      if (this.viewLength >= length) {
        this.showViewMoreButton = false;
      } else {
        this.showViewMoreButton = true;
      }
    },
  },
  // beforeMount() {
  //   this.checkListComplete();
  //   this.getWhatsappProducts();
  // },
  mounted() {
    console.log("viewmore1 is", this.viewLength);
    this.checkListComplete();
    this.getWhatsappProducts();
  },
};

// const getNumOfItems = () => (!viewMore ? 4 - 1 : Infinity);

// onMounted(() => getWhatsappProducts());
</script> */
}

function FoodItemsSection() {
  //   <div className="" v-if="foodItems.value.length">
  //  <h6 className="inner-head">
  //    { foodItems.value.length } Available Deals
  //  </h6>
  //  <div className="row">
  //    <div
  //      className="col-md-6 col-lg-3"
  //      v-for="(data, i) in foodItems.value"
  //      :key="i"
  //    >
  return (
    <section className="food-items-bg d-none d-lg-block webfoodTab-view">
      section
    </section>
  );
}
export default FoodItemsSection;
