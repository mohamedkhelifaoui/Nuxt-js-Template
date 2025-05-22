import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { mergeProps, ref, computed, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { _ as _export_sfc } from './server.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _imports_0$3 = publicAssetsURL("/images/Contact.svg");
const _imports_1$1 = publicAssetsURL("/images/hero-lamps.jpg");
const _imports_2$1 = publicAssetsURL("/images/Menu.png");
const _sfc_main$5 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-root" }, _attrs))} data-v-3352e68a><div class="hero-desktop" data-v-3352e68a><header class="app-header" data-v-3352e68a><div class="header-inner" data-v-3352e68a><nav class="nav-links" data-v-3352e68a><button class="logo" data-v-3352e68a>antic</button><button class="logoo" data-v-3352e68a>Products</button><button class="logoo" data-v-3352e68a>Rooms</button><button class="logoo" data-v-3352e68a>Services</button><button class="logoo" data-v-3352e68a>Inspirations</button></nav></div><div class="chat-icon" data-v-3352e68a><img${ssrRenderAttr("src", _imports_0$3)} alt="Chat icon" data-v-3352e68a></div></header><div class="left" data-v-3352e68a><div class="hero-content" data-v-3352e68a><div class="label" data-v-3352e68a>HOME DESIGN</div><h1 data-v-3352e68a>Elegance for<br data-v-3352e68a>Interiors &amp;<br data-v-3352e68a>Exteriors</h1><p data-v-3352e68a>We provide everyone with modern,<br data-v-3352e68a>trendy, quality furniture</p><div class="scroll-indicator" data-v-3352e68a><svg width="40" height="40" viewBox="0 0 40 40" fill="none" data-v-3352e68a><circle cx="20" cy="20" r="19" stroke="currentColor" stroke-width="1.5" data-v-3352e68a></circle><path d="M25 17L20 22L15 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-3352e68a></path></svg></div></div></div><div class="right" data-v-3352e68a><img${ssrRenderAttr("src", _imports_1$1)} alt="Copper pendant lamps" data-v-3352e68a></div></div><div class="hero-mobile" data-v-3352e68a><div class="hero-bg" data-v-3352e68a></div><div class="mobile-header-row" data-v-3352e68a><span class="logo garamond" data-v-3352e68a>antic</span><button class="menu-btn" aria-label="Open menu" data-v-3352e68a><img${ssrRenderAttr("src", _imports_2$1)} alt="Menu icon" data-v-3352e68a></button></div><div class="hero-mobile-content" data-v-3352e68a><span class="label" data-v-3352e68a>HOME DESIGN</span><h1 class="garamond" data-v-3352e68a>Elegance for<br data-v-3352e68a>Interiors &amp;<br data-v-3352e68a>Exteriors</h1><p data-v-3352e68a>We provide everyone with modern,<br data-v-3352e68a>trendy, quality furniture</p><div class="scroll-indicator" data-v-3352e68a><svg width="44" height="44" viewBox="0 0 44 44" fill="none" data-v-3352e68a><circle cx="22" cy="22" r="20.5" stroke="#fff" stroke-width="2" data-v-3352e68a></circle><path d="M29 20L22 27L15 20" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-3352e68a></path></svg></div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const AppHeader = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-3352e68a"]]);
const _imports_0$2 = publicAssetsURL("/images/Right.svg");
const pageSize = 2;
const _sfc_main$4 = {
  __name: "FindYourRoom",
  __ssrInlineRender: true,
  setup(__props) {
    const rooms = [
      { name: "Bedroom", image: "/images/bedroom.jpg" },
      { name: "Living room", image: "/images/living-room.jpg" },
      { name: "Office", image: "/images/office.jpg" },
      { name: "Dining room", image: "/images/dining.jpg" }
    ];
    const page = ref(0);
    const totalPages = Math.ceil(rooms.length / pageSize);
    const formattedIndex = computed(
      () => (page.value + 1).toString().padStart(2, "0")
    );
    const formattedTotal = computed(
      () => totalPages.toString().padStart(2, "0")
    );
    const currentRooms = computed(
      () => rooms.slice(page.value * pageSize, page.value * pageSize + pageSize)
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "find-room-section",
        id: "rooms"
      }, _attrs))} data-v-683b7127><div class="find-room-layout" data-v-683b7127><div class="find-room-top" data-v-683b7127><h2 class="find-room-title garamond" data-v-683b7127>Find your room</h2></div><div class="find-room-content" data-v-683b7127><div class="find-room-desc-area" data-v-683b7127><div class="find-room-desc" data-v-683b7127> Dining room,<br data-v-683b7127> bedroom, bathroom<br data-v-683b7127> or office. Find what<br data-v-683b7127> you need </div></div><div class="find-room-cards" data-v-683b7127><!--[-->`);
      ssrRenderList(currentRooms.value, (room, i) => {
        _push(`<div class="room-img-wrap" data-v-683b7127><img${ssrRenderAttr("src", room.image)}${ssrRenderAttr("alt", room.name)} data-v-683b7127><div class="room-img-overlay" data-v-683b7127><span class="new-label" data-v-683b7127>New arrivals</span></div><span class="room-title" data-v-683b7127>${ssrInterpolate(room.name)}</span></div>`);
      });
      _push(`<!--]--></div></div><div class="find-room-pagination" data-v-683b7127><span data-v-683b7127>${ssrInterpolate(formattedIndex.value)} / ${ssrInterpolate(formattedTotal.value)}</span><button data-v-683b7127> Next<img${ssrRenderAttr("src", _imports_0$2)} class="arrow" alt="t" data-v-683b7127></button></div></div><div class="find-room-mobile" data-v-683b7127><h2 class="find-room-title-mobile" data-v-683b7127>Find your room</h2><div class="find-room-desc-mobile" data-v-683b7127> Dining room, bedroom, bathroom or office. Find what you need </div><div class="room-img-mobile-wrap" data-v-683b7127><div class="room-img-wrap-mobile" data-v-683b7127><img${ssrRenderAttr("src", rooms[page.value].image)}${ssrRenderAttr("alt", rooms[page.value].name)} data-v-683b7127><div class="room-img-overlay-mobile" data-v-683b7127></div><span class="new-label-mobile" data-v-683b7127>New arrivals</span></div><span class="room-title-mobile" data-v-683b7127>${ssrInterpolate(rooms[page.value].name)}</span></div><div class="find-room-pagination-mobile" data-v-683b7127><button class="next-mobile" data-v-683b7127> Next <img${ssrRenderAttr("src", _imports_0$2)} alt="Next" class="arrow-mobile" data-v-683b7127></button><span class="page-count-mobile" data-v-683b7127>${ssrInterpolate(formattedIndex.value)} / ${ssrInterpolate(formattedTotal.value)}</span></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FindYourRoom.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const FindYourRoom = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-683b7127"]]);
const _sfc_main$3 = {
  __name: "DesignSupport",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        title: "Our Advices",
        description: "What if you took advantage of this rather special period to rethink your interior? You spend more time at home so you might as well feel good there."
      },
      {
        title: "Click and Collect",
        description: "Adapted and contactless. Free from \u20AC200 of purchases in stores offering the service."
      },
      {
        title: "Conception Service",
        description: "Personalized service with an expert advisor for your interior and exterior decoration or layout projects."
      },
      {
        title: "Installation Service",
        description: "Our furniture packaged in flat packs are designed for easy assembly. But you can call on our partner."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "design-support",
        id: "services"
      }, _attrs))} data-v-b7fa5c81><div class="left" data-v-b7fa5c81><h2 data-v-b7fa5c81> We stay by your <br data-v-b7fa5c81> side to design <br data-v-b7fa5c81> your projects </h2><a href="#" class="more-link" data-v-b7fa5c81>Find out more \u203A</a></div><div class="right" data-v-b7fa5c81><!--[-->`);
      ssrRenderList(services, (item, i) => {
        _push(`<div class="service" data-v-b7fa5c81><h3 data-v-b7fa5c81>${ssrInterpolate(item.title)}</h3><p data-v-b7fa5c81>${ssrInterpolate(item.description)}</p></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DesignSupport.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const DesignSupport = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-b7fa5c81"]]);
const _imports_0$1 = publicAssetsURL("/images/Button-right.svg");
const _imports_1 = publicAssetsURL("/images/Button-left.svg");
const _imports_2 = publicAssetsURL("/images/living-room.jpg");
const _sfc_main$2 = {
  __name: "LatestTrends",
  __ssrInlineRender: true,
  setup(__props) {
    const images = [
      "/images/trend1.jpg",
      "/images/trend2.jpg",
      "/images/trend3.jpg",
      "/images/trend4.jpg",
      "/images/trend5.jpg"
    ];
    const swiperInstance = ref(null);
    function renderCustomPagination(swiper, current, total) {
      const pad = (n) => String(n).padStart(2, "0");
      return `${pad(current)} / ${pad(total)}`;
    }
    function onSwiper(swiper) {
      swiperInstance.value = swiper;
      setTimeout(() => {
        if (swiper.navigation && swiper.navigation.init) {
          swiper.navigation.init();
          swiper.navigation.update();
        }
      }, 0);
    }
    function onSlideChange() {
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "latest-trends",
        id: "inspirations"
      }, _attrs))} data-v-f1fb5d7d><div class="top-row" data-v-f1fb5d7d><div class="heading" data-v-f1fb5d7d><h2 data-v-f1fb5d7d>Be aware of the latest trends</h2><p data-v-f1fb5d7d>Stay informed of new trends, but also of our various offers.</p><a href="#" class="learn-link" data-v-f1fb5d7d>Learn more \u203A</a></div><form class="newsletter" data-v-f1fb5d7d><input type="email" placeholder="email@address.com" data-v-f1fb5d7d><button type="submit" data-v-f1fb5d7d>Subscribe</button></form></div><div class="gallery-inspiration-row desktop-only" data-v-f1fb5d7d><div class="gallery-wrap" style="${ssrRenderStyle({ "position": "relative" })}" data-v-f1fb5d7d>`);
      _push(ssrRenderComponent(unref(Swiper), {
        "slides-per-view": 3,
        "space-between": 20,
        loop: false,
        pagination: {
          el: ".custom-pagination",
          type: "custom",
          renderCustom: renderCustomPagination
        },
        onSwiper,
        onSlideChange,
        class: "gallery-swiper"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(images, (img, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="trend-image" data-v-f1fb5d7d${_scopeId2}><img${ssrRenderAttr("src", img)} alt="Trend image" data-v-f1fb5d7d${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "trend-image" }, [
                        createVNode("img", {
                          src: img,
                          alt: "Trend image"
                        }, null, 8, ["src"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(images, (img, i) => {
                return createVNode(unref(SwiperSlide), { key: i }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "trend-image" }, [
                      createVNode("img", {
                        src: img,
                        alt: "Trend image"
                      }, null, 8, ["src"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="pagination custom-pagination block mt-4 text-center" data-v-f1fb5d7d></span></div></div><div class="inspirations desktop-only" data-v-f1fb5d7d><div class="ins-h3" data-v-f1fb5d7d>Inspirations</div><p class="ins-p" data-v-f1fb5d7d> Our experts are keen to stay on top of trends in order to offer you new inspirations for your interior and exterior every day. Remember that to inspire you we have to inspire ourselves and we want to share that with you. </p><div class="ins-div" data-v-f1fb5d7d><button class="arrow prev" type="button" data-v-f1fb5d7d><img${ssrRenderAttr("src", _imports_0$1)} alt="Previous" style="${ssrRenderStyle({ "width": "24px", "height": "24px" })}" data-v-f1fb5d7d></button><button class="arrow next" type="button" data-v-f1fb5d7d><img${ssrRenderAttr("src", _imports_1)} alt="Next" style="${ssrRenderStyle({ "width": "24px", "height": "24px" })}" data-v-f1fb5d7d></button></div></div><div class="mobile-only mobile-inspirations-section" data-v-f1fb5d7d><div class="mobile-inspirations-title" data-v-f1fb5d7d>Inspirations</div><div class="mobile-inspirations-desc" data-v-f1fb5d7d> Our experts are keen to stay on top of trends in order to offer you new inspirations for your interior and exterior every day. Remember that to inspire you we have to inspire ourselves and we want to share that with you. </div><div class="inspirations-images" data-v-f1fb5d7d><div class="inspirations-image-wrap" data-v-f1fb5d7d><img${ssrRenderAttr("src", _imports_2)} alt="Chair" data-v-f1fb5d7d><div class="inspirations-image-label" data-v-f1fb5d7d>Living room</div></div><div class="inspirations-image-wrap" data-v-f1fb5d7d><img${ssrRenderAttr("src", _imports_2)} alt="Cooked" data-v-f1fb5d7d><div class="inspirations-image-label" data-v-f1fb5d7d>Living room</div></div><div class="inspirations-image-wrap" data-v-f1fb5d7d><img${ssrRenderAttr("src", _imports_2)} alt="Living room" data-v-f1fb5d7d><div class="inspirations-image-label" data-v-f1fb5d7d>Living room</div></div><div class="inspirations-image-wrap" data-v-f1fb5d7d><img${ssrRenderAttr("src", _imports_2)} alt="Tables" data-v-f1fb5d7d><div class="inspirations-image-label" data-v-f1fb5d7d>Living room</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LatestTrends.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const LatestTrends = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f1fb5d7d"]]);
const _imports_0 = publicAssetsURL("/images/planet.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "app-footer" }, _attrs))} data-v-e3e92f1f><div class="footer-main" data-v-e3e92f1f><div class="footer-grid" data-v-e3e92f1f><div class="footer-logo" data-v-e3e92f1f>antic</div><div class="footer-col" data-v-e3e92f1f><h4 data-v-e3e92f1f>Products</h4><ul data-v-e3e92f1f><li data-v-e3e92f1f>Furniture</li><li data-v-e3e92f1f>Decoration</li><li data-v-e3e92f1f>Storage</li><li data-v-e3e92f1f>Baby and child</li><li data-v-e3e92f1f>Connected home</li></ul></div><div class="footer-col" data-v-e3e92f1f><h4 data-v-e3e92f1f>Rooms</h4><ul data-v-e3e92f1f><li data-v-e3e92f1f>Living room</li><li data-v-e3e92f1f>Dining room</li><li data-v-e3e92f1f>Cooked</li><li data-v-e3e92f1f>Bedroom</li><li data-v-e3e92f1f>Bathroom</li><li data-v-e3e92f1f>Office</li><li data-v-e3e92f1f>Laundry</li><li data-v-e3e92f1f>Garage</li></ul></div><div class="footer-col" data-v-e3e92f1f><h4 data-v-e3e92f1f>Services</h4><ul data-v-e3e92f1f><li data-v-e3e92f1f>Click and collect</li><li data-v-e3e92f1f>Conception</li><li data-v-e3e92f1f>Installation</li><li data-v-e3e92f1f>Advices</li><li data-v-e3e92f1f>Gift card</li></ul></div><div class="footer-col" data-v-e3e92f1f><h4 data-v-e3e92f1f>About</h4><ul data-v-e3e92f1f><li data-v-e3e92f1f>Our story</li><li data-v-e3e92f1f>Our stores</li><li data-v-e3e92f1f>Our partners</li></ul></div><div class="footer-planet" data-v-e3e92f1f><h4 data-v-e3e92f1f>We respect our planet</h4><img${ssrRenderAttr("src", _imports_0)} alt="planet" data-v-e3e92f1f><p data-v-e3e92f1f> We&#39;re taking positive steps to reduce our impact on the planet.<br data-v-e3e92f1f> For us, that means retailing responsibly. </p><a href="#" class="learn-link" data-v-e3e92f1f>Learn more <span data-v-e3e92f1f>\u203A</span></a></div></div><div class="footer-bottom" data-v-e3e92f1f><div class="footer-bottom-left" data-v-e3e92f1f> \xA9 2021 Agence Dnd </div><div class="footer-bottom-right" data-v-e3e92f1f><a href="#" data-v-e3e92f1f>Privacy policy</a><a href="#" data-v-e3e92f1f>Term of service</a><a href="#" data-v-e3e92f1f>Language</a></div></div><div class="footer-agence-dnd" data-v-e3e92f1f><div class="footer-links" data-v-e3e92f1f><a href="#" class="footer-link" data-v-e3e92f1f>Privacy policy</a><a href="#" class="footer-link" data-v-e3e92f1f>Term of service</a></div><div class="footer-lang" data-v-e3e92f1f> Language </div><div class="footer-copyright" data-v-e3e92f1f> \xA9 2021 Agence Dnd </div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e3e92f1f"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(AppHeader, null, null, _parent));
      _push(ssrRenderComponent(FindYourRoom, null, null, _parent));
      _push(ssrRenderComponent(DesignSupport, null, null, _parent));
      _push(ssrRenderComponent(LatestTrends, null, null, _parent));
      _push(ssrRenderComponent(AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-vmSBIteY.mjs.map
