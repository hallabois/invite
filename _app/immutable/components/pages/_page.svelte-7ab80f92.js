import { J as identity, S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, k as element, e as empty, K as head_selector, l as claim_element, h as detach, n as attr, H as append_hydration, E as update_slot_base, F as get_all_dirty_from_scope, G as get_slot_changes, f as transition_in, t as transition_out, C as noop, b as insert_hydration, a as space, c as claim_space, L as destroy_each, M as HtmlTagHydration, N as claim_html_tag, x as create_component, q as text, m as children, y as claim_component, r as claim_text, O as src_url_equal, P as toggle_class, z as mount_component, d as check_outros, A as destroy_component, o as onMount, Q as set_input_value, R as listen, g as group_outros, T as create_out_transition, U as run_all, p as set_style, u as set_data, V as add_render_callback, W as create_in_transition, X as is_function } from "../../chunks/index-95abc4cf.js";
import { b as base } from "../../chunks/paths-ad6427a3.js";
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
function slide(node, { delay = 0, duration = 400, easing = cubicOut } = {}) {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const height = parseFloat(style.height);
  const padding_top = parseFloat(style.paddingTop);
  const padding_bottom = parseFloat(style.paddingBottom);
  const margin_top = parseFloat(style.marginTop);
  const margin_bottom = parseFloat(style.marginBottom);
  const border_top_width = parseFloat(style.borderTopWidth);
  const border_bottom_width = parseFloat(style.borderBottomWidth);
  return {
    delay,
    duration,
    easing,
    css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};height: ${t * height}px;padding-top: ${t * padding_top}px;padding-bottom: ${t * padding_bottom}px;margin-top: ${t * margin_top}px;margin-bottom: ${t * margin_bottom}px;border-top-width: ${t * border_top_width}px;border-bottom-width: ${t * border_bottom_width}px;`
  };
}
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[11] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[14] = list[i];
  return child_ctx;
}
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[17] = list[i];
  return child_ctx;
}
function create_if_block_29(ctx) {
  document.title = /*title*/
  ctx[0];
  return { c: noop, l: noop, m: noop, d: noop };
}
function create_if_block_28(ctx) {
  let meta;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { name: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "name", "description");
      attr(
        meta,
        "content",
        /*description*/
        ctx[3]
      );
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*description*/
      8) {
        attr(
          meta,
          "content",
          /*description*/
          ctx2[3]
        );
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function create_if_block_27(ctx) {
  let link;
  return {
    c() {
      link = element("link");
      this.h();
    },
    l(nodes) {
      link = claim_element(nodes, "LINK", { rel: true, href: true });
      this.h();
    },
    h() {
      attr(link, "rel", "canonical");
      attr(
        link,
        "href",
        /*canonical*/
        ctx[5]
      );
    },
    m(target, anchor) {
      insert_hydration(target, link, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*canonical*/
      32) {
        attr(
          link,
          "href",
          /*canonical*/
          ctx2[5]
        );
      }
    },
    d(detaching) {
      if (detaching)
        detach(link);
    }
  };
}
function create_if_block_26(ctx) {
  let meta;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { name: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "name", "keywords");
      attr(
        meta,
        "content",
        /*keywords*/
        ctx[4]
      );
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*keywords*/
      16) {
        attr(
          meta,
          "content",
          /*keywords*/
          ctx2[4]
        );
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function create_if_block_10(ctx) {
  let t0;
  let t1;
  let t2;
  let t3;
  let t4;
  let if_block5_anchor;
  let if_block0 = (
    /*openGraph*/
    ctx[6].title && create_if_block_25(ctx)
  );
  let if_block1 = (
    /*openGraph*/
    ctx[6].description && create_if_block_24(ctx)
  );
  let if_block2 = (
    /*openGraph*/
    (ctx[6].url || /*canonical*/
    ctx[5]) && create_if_block_23(ctx)
  );
  let if_block3 = (
    /*openGraph*/
    ctx[6].type && create_if_block_22(ctx)
  );
  let if_block4 = (
    /*openGraph*/
    ctx[6].article && create_if_block_15(ctx)
  );
  let if_block5 = (
    /*openGraph*/
    ctx[6].images && /*openGraph*/
    ctx[6].images.length && create_if_block_11(ctx)
  );
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      if (if_block2)
        if_block2.c();
      t2 = space();
      if (if_block3)
        if_block3.c();
      t3 = space();
      if (if_block4)
        if_block4.c();
      t4 = space();
      if (if_block5)
        if_block5.c();
      if_block5_anchor = empty();
    },
    l(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      t0 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      t1 = claim_space(nodes);
      if (if_block2)
        if_block2.l(nodes);
      t2 = claim_space(nodes);
      if (if_block3)
        if_block3.l(nodes);
      t3 = claim_space(nodes);
      if (if_block4)
        if_block4.l(nodes);
      t4 = claim_space(nodes);
      if (if_block5)
        if_block5.l(nodes);
      if_block5_anchor = empty();
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration(target, t0, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, t1, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert_hydration(target, t2, anchor);
      if (if_block3)
        if_block3.m(target, anchor);
      insert_hydration(target, t3, anchor);
      if (if_block4)
        if_block4.m(target, anchor);
      insert_hydration(target, t4, anchor);
      if (if_block5)
        if_block5.m(target, anchor);
      insert_hydration(target, if_block5_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (
        /*openGraph*/
        ctx2[6].title
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_25(ctx2);
          if_block0.c();
          if_block0.m(t0.parentNode, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*openGraph*/
        ctx2[6].description
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_24(ctx2);
          if_block1.c();
          if_block1.m(t1.parentNode, t1);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (
        /*openGraph*/
        ctx2[6].url || /*canonical*/
        ctx2[5]
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block_23(ctx2);
          if_block2.c();
          if_block2.m(t2.parentNode, t2);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
      if (
        /*openGraph*/
        ctx2[6].type
      ) {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
        } else {
          if_block3 = create_if_block_22(ctx2);
          if_block3.c();
          if_block3.m(t3.parentNode, t3);
        }
      } else if (if_block3) {
        if_block3.d(1);
        if_block3 = null;
      }
      if (
        /*openGraph*/
        ctx2[6].article
      ) {
        if (if_block4) {
          if_block4.p(ctx2, dirty);
        } else {
          if_block4 = create_if_block_15(ctx2);
          if_block4.c();
          if_block4.m(t4.parentNode, t4);
        }
      } else if (if_block4) {
        if_block4.d(1);
        if_block4 = null;
      }
      if (
        /*openGraph*/
        ctx2[6].images && /*openGraph*/
        ctx2[6].images.length
      ) {
        if (if_block5) {
          if_block5.p(ctx2, dirty);
        } else {
          if_block5 = create_if_block_11(ctx2);
          if_block5.c();
          if_block5.m(if_block5_anchor.parentNode, if_block5_anchor);
        }
      } else if (if_block5) {
        if_block5.d(1);
        if_block5 = null;
      }
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t0);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(t1);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach(t2);
      if (if_block3)
        if_block3.d(detaching);
      if (detaching)
        detach(t3);
      if (if_block4)
        if_block4.d(detaching);
      if (detaching)
        detach(t4);
      if (if_block5)
        if_block5.d(detaching);
      if (detaching)
        detach(if_block5_anchor);
    }
  };
}
function create_if_block_25(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { property: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "property", "og:title");
      attr(meta, "content", meta_content_value = /*openGraph*/
      ctx[6].title);
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*openGraph*/
      64 && meta_content_value !== (meta_content_value = /*openGraph*/
      ctx2[6].title)) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function create_if_block_24(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { property: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "property", "og:description");
      attr(meta, "content", meta_content_value = /*openGraph*/
      ctx[6].description);
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*openGraph*/
      64 && meta_content_value !== (meta_content_value = /*openGraph*/
      ctx2[6].description)) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function create_if_block_23(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { property: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "property", "og:url");
      attr(meta, "content", meta_content_value = /*openGraph*/
      ctx[6].url || /*canonical*/
      ctx[5]);
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*openGraph, canonical*/
      96 && meta_content_value !== (meta_content_value = /*openGraph*/
      ctx2[6].url || /*canonical*/
      ctx2[5])) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function create_if_block_22(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { property: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "property", "og:type");
      attr(meta, "content", meta_content_value = /*openGraph*/
      ctx[6].type.toLowerCase());
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*openGraph*/
      64 && meta_content_value !== (meta_content_value = /*openGraph*/
      ctx2[6].type.toLowerCase())) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function create_if_block_15(ctx) {
  let t0;
  let t1;
  let t2;
  let t3;
  let t4;
  let if_block5_anchor;
  let if_block0 = (
    /*openGraph*/
    ctx[6].article.publishedTime && create_if_block_21(ctx)
  );
  let if_block1 = (
    /*openGraph*/
    ctx[6].article.modifiedTime && create_if_block_20(ctx)
  );
  let if_block2 = (
    /*openGraph*/
    ctx[6].article.expirationTime && create_if_block_19(ctx)
  );
  let if_block3 = (
    /*openGraph*/
    ctx[6].article.section && create_if_block_18(ctx)
  );
  let if_block4 = (
    /*openGraph*/
    ctx[6].article.authors && /*openGraph*/
    ctx[6].article.authors.length && create_if_block_17(ctx)
  );
  let if_block5 = (
    /*openGraph*/
    ctx[6].article.tags && /*openGraph*/
    ctx[6].article.tags.length && create_if_block_16(ctx)
  );
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      if (if_block2)
        if_block2.c();
      t2 = space();
      if (if_block3)
        if_block3.c();
      t3 = space();
      if (if_block4)
        if_block4.c();
      t4 = space();
      if (if_block5)
        if_block5.c();
      if_block5_anchor = empty();
    },
    l(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      t0 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      t1 = claim_space(nodes);
      if (if_block2)
        if_block2.l(nodes);
      t2 = claim_space(nodes);
      if (if_block3)
        if_block3.l(nodes);
      t3 = claim_space(nodes);
      if (if_block4)
        if_block4.l(nodes);
      t4 = claim_space(nodes);
      if (if_block5)
        if_block5.l(nodes);
      if_block5_anchor = empty();
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration(target, t0, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, t1, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert_hydration(target, t2, anchor);
      if (if_block3)
        if_block3.m(target, anchor);
      insert_hydration(target, t3, anchor);
      if (if_block4)
        if_block4.m(target, anchor);
      insert_hydration(target, t4, anchor);
      if (if_block5)
        if_block5.m(target, anchor);
      insert_hydration(target, if_block5_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (
        /*openGraph*/
        ctx2[6].article.publishedTime
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_21(ctx2);
          if_block0.c();
          if_block0.m(t0.parentNode, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*openGraph*/
        ctx2[6].article.modifiedTime
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_20(ctx2);
          if_block1.c();
          if_block1.m(t1.parentNode, t1);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (
        /*openGraph*/
        ctx2[6].article.expirationTime
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block_19(ctx2);
          if_block2.c();
          if_block2.m(t2.parentNode, t2);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
      if (
        /*openGraph*/
        ctx2[6].article.section
      ) {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
        } else {
          if_block3 = create_if_block_18(ctx2);
          if_block3.c();
          if_block3.m(t3.parentNode, t3);
        }
      } else if (if_block3) {
        if_block3.d(1);
        if_block3 = null;
      }
      if (
        /*openGraph*/
        ctx2[6].article.authors && /*openGraph*/
        ctx2[6].article.authors.length
      ) {
        if (if_block4) {
          if_block4.p(ctx2, dirty);
        } else {
          if_block4 = create_if_block_17(ctx2);
          if_block4.c();
          if_block4.m(t4.parentNode, t4);
        }
      } else if (if_block4) {
        if_block4.d(1);
        if_block4 = null;
      }
      if (
        /*openGraph*/
        ctx2[6].article.tags && /*openGraph*/
        ctx2[6].article.tags.length
      ) {
        if (if_block5) {
          if_block5.p(ctx2, dirty);
        } else {
          if_block5 = create_if_block_16(ctx2);
          if_block5.c();
          if_block5.m(if_block5_anchor.parentNode, if_block5_anchor);
        }
      } else if (if_block5) {
        if_block5.d(1);
        if_block5 = null;
      }
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t0);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(t1);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach(t2);
      if (if_block3)
        if_block3.d(detaching);
      if (detaching)
        detach(t3);
      if (if_block4)
        if_block4.d(detaching);
      if (detaching)
        detach(t4);
      if (if_block5)
        if_block5.d(detaching);
      if (detaching)
        detach(if_block5_anchor);
    }
  };
}
function create_if_block_21(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { property: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "property", "article:published_time");
      attr(meta, "content", meta_content_value = /*openGraph*/
      ctx[6].article.publishedTime);
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*openGraph*/
      64 && meta_content_value !== (meta_content_value = /*openGraph*/
      ctx2[6].article.publishedTime)) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function create_if_block_20(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { property: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "property", "article:modified_time");
      attr(meta, "content", meta_content_value = /*openGraph*/
      ctx[6].article.modifiedTime);
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*openGraph*/
      64 && meta_content_value !== (meta_content_value = /*openGraph*/
      ctx2[6].article.modifiedTime)) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function create_if_block_19(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { property: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "property", "article:expiration_time");
      attr(meta, "content", meta_content_value = /*openGraph*/
      ctx[6].article.expirationTime);
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*openGraph*/
      64 && meta_content_value !== (meta_content_value = /*openGraph*/
      ctx2[6].article.expirationTime)) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function create_if_block_18(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { property: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "property", "article:section");
      attr(meta, "content", meta_content_value = /*openGraph*/
      ctx[6].article.section);
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*openGraph*/
      64 && meta_content_value !== (meta_content_value = /*openGraph*/
      ctx2[6].article.section)) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function create_if_block_17(ctx) {
  let each_1_anchor;
  let each_value_2 = (
    /*openGraph*/
    ctx[6].article.authors
  );
  let each_blocks = [];
  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*openGraph*/
      64) {
        each_value_2 = /*openGraph*/
        ctx2[6].article.authors;
        let i;
        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2(ctx2, each_value_2, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_2(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_2.length;
      }
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_each_block_2(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { property: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "property", "article:author");
      attr(meta, "content", meta_content_value = /*author*/
      ctx[17]);
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*openGraph*/
      64 && meta_content_value !== (meta_content_value = /*author*/
      ctx2[17])) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function create_if_block_16(ctx) {
  let each_1_anchor;
  let each_value_1 = (
    /*openGraph*/
    ctx[6].article.tags
  );
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*openGraph*/
      64) {
        each_value_1 = /*openGraph*/
        ctx2[6].article.tags;
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_each_block_1(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { property: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "property", "article:tag");
      attr(meta, "content", meta_content_value = /*tag*/
      ctx[14]);
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*openGraph*/
      64 && meta_content_value !== (meta_content_value = /*tag*/
      ctx2[14])) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function create_if_block_11(ctx) {
  let each_1_anchor;
  let each_value = (
    /*openGraph*/
    ctx[6].images
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*openGraph*/
      64) {
        each_value = /*openGraph*/
        ctx2[6].images;
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_if_block_14(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { property: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "property", "og:image:alt");
      attr(meta, "content", meta_content_value = /*image*/
      ctx[11].alt);
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*openGraph*/
      64 && meta_content_value !== (meta_content_value = /*image*/
      ctx2[11].alt)) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function create_if_block_13(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { property: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "property", "og:image:width");
      attr(meta, "content", meta_content_value = /*image*/
      ctx[11].width.toString());
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*openGraph*/
      64 && meta_content_value !== (meta_content_value = /*image*/
      ctx2[11].width.toString())) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function create_if_block_12(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { property: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "property", "og:image:height");
      attr(meta, "content", meta_content_value = /*image*/
      ctx[11].height.toString());
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*openGraph*/
      64 && meta_content_value !== (meta_content_value = /*image*/
      ctx2[11].height.toString())) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function create_each_block$1(ctx) {
  let meta;
  let meta_content_value;
  let t0;
  let t1;
  let t2;
  let if_block2_anchor;
  let if_block0 = (
    /*image*/
    ctx[11].alt && create_if_block_14(ctx)
  );
  let if_block1 = (
    /*image*/
    ctx[11].width && create_if_block_13(ctx)
  );
  let if_block2 = (
    /*image*/
    ctx[11].height && create_if_block_12(ctx)
  );
  return {
    c() {
      meta = element("meta");
      t0 = space();
      if (if_block0)
        if_block0.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      t2 = space();
      if (if_block2)
        if_block2.c();
      if_block2_anchor = empty();
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { property: true, content: true });
      t0 = claim_space(nodes);
      if (if_block0)
        if_block0.l(nodes);
      t1 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      t2 = claim_space(nodes);
      if (if_block2)
        if_block2.l(nodes);
      if_block2_anchor = empty();
      this.h();
    },
    h() {
      attr(meta, "property", "og:image");
      attr(meta, "content", meta_content_value = /*image*/
      ctx[11].url);
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
      insert_hydration(target, t0, anchor);
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration(target, t1, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, t2, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert_hydration(target, if_block2_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*openGraph*/
      64 && meta_content_value !== (meta_content_value = /*image*/
      ctx2[11].url)) {
        attr(meta, "content", meta_content_value);
      }
      if (
        /*image*/
        ctx2[11].alt
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_14(ctx2);
          if_block0.c();
          if_block0.m(t1.parentNode, t1);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*image*/
        ctx2[11].width
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_13(ctx2);
          if_block1.c();
          if_block1.m(t2.parentNode, t2);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (
        /*image*/
        ctx2[11].height
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block_12(ctx2);
          if_block2.c();
          if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
      if (detaching)
        detach(t0);
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t1);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(t2);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach(if_block2_anchor);
    }
  };
}
function create_if_block_1$1(ctx) {
  let meta;
  let meta_content_value;
  let t0;
  let t1;
  let t2;
  let t3;
  let t4;
  let t5;
  let t6;
  let t7;
  let if_block7_anchor;
  let if_block0 = (
    /*twitter*/
    ctx[7].site && create_if_block_9(ctx)
  );
  let if_block1 = (
    /*twitter*/
    ctx[7].title && create_if_block_8(ctx)
  );
  let if_block2 = (
    /*twitter*/
    ctx[7].description && create_if_block_7(ctx)
  );
  let if_block3 = (
    /*twitter*/
    ctx[7].image && create_if_block_6(ctx)
  );
  let if_block4 = (
    /*twitter*/
    ctx[7].imageAlt && create_if_block_5(ctx)
  );
  let if_block5 = (
    /*twitter*/
    ctx[7].player && create_if_block_4(ctx)
  );
  let if_block6 = (
    /*twitter*/
    ctx[7].playerWidth && create_if_block_3(ctx)
  );
  let if_block7 = (
    /*twitter*/
    ctx[7].playerHeight && create_if_block_2(ctx)
  );
  return {
    c() {
      meta = element("meta");
      t0 = space();
      if (if_block0)
        if_block0.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      t2 = space();
      if (if_block2)
        if_block2.c();
      t3 = space();
      if (if_block3)
        if_block3.c();
      t4 = space();
      if (if_block4)
        if_block4.c();
      t5 = space();
      if (if_block5)
        if_block5.c();
      t6 = space();
      if (if_block6)
        if_block6.c();
      t7 = space();
      if (if_block7)
        if_block7.c();
      if_block7_anchor = empty();
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { name: true, content: true });
      t0 = claim_space(nodes);
      if (if_block0)
        if_block0.l(nodes);
      t1 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      t2 = claim_space(nodes);
      if (if_block2)
        if_block2.l(nodes);
      t3 = claim_space(nodes);
      if (if_block3)
        if_block3.l(nodes);
      t4 = claim_space(nodes);
      if (if_block4)
        if_block4.l(nodes);
      t5 = claim_space(nodes);
      if (if_block5)
        if_block5.l(nodes);
      t6 = claim_space(nodes);
      if (if_block6)
        if_block6.l(nodes);
      t7 = claim_space(nodes);
      if (if_block7)
        if_block7.l(nodes);
      if_block7_anchor = empty();
      this.h();
    },
    h() {
      attr(meta, "name", "twitter:card");
      attr(meta, "content", meta_content_value = /*twitter*/
      ctx[7].card || "summary_large_image");
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
      insert_hydration(target, t0, anchor);
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration(target, t1, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, t2, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert_hydration(target, t3, anchor);
      if (if_block3)
        if_block3.m(target, anchor);
      insert_hydration(target, t4, anchor);
      if (if_block4)
        if_block4.m(target, anchor);
      insert_hydration(target, t5, anchor);
      if (if_block5)
        if_block5.m(target, anchor);
      insert_hydration(target, t6, anchor);
      if (if_block6)
        if_block6.m(target, anchor);
      insert_hydration(target, t7, anchor);
      if (if_block7)
        if_block7.m(target, anchor);
      insert_hydration(target, if_block7_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*twitter*/
      128 && meta_content_value !== (meta_content_value = /*twitter*/
      ctx2[7].card || "summary_large_image")) {
        attr(meta, "content", meta_content_value);
      }
      if (
        /*twitter*/
        ctx2[7].site
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_9(ctx2);
          if_block0.c();
          if_block0.m(t1.parentNode, t1);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*twitter*/
        ctx2[7].title
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_8(ctx2);
          if_block1.c();
          if_block1.m(t2.parentNode, t2);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (
        /*twitter*/
        ctx2[7].description
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block_7(ctx2);
          if_block2.c();
          if_block2.m(t3.parentNode, t3);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
      if (
        /*twitter*/
        ctx2[7].image
      ) {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
        } else {
          if_block3 = create_if_block_6(ctx2);
          if_block3.c();
          if_block3.m(t4.parentNode, t4);
        }
      } else if (if_block3) {
        if_block3.d(1);
        if_block3 = null;
      }
      if (
        /*twitter*/
        ctx2[7].imageAlt
      ) {
        if (if_block4) {
          if_block4.p(ctx2, dirty);
        } else {
          if_block4 = create_if_block_5(ctx2);
          if_block4.c();
          if_block4.m(t5.parentNode, t5);
        }
      } else if (if_block4) {
        if_block4.d(1);
        if_block4 = null;
      }
      if (
        /*twitter*/
        ctx2[7].player
      ) {
        if (if_block5) {
          if_block5.p(ctx2, dirty);
        } else {
          if_block5 = create_if_block_4(ctx2);
          if_block5.c();
          if_block5.m(t6.parentNode, t6);
        }
      } else if (if_block5) {
        if_block5.d(1);
        if_block5 = null;
      }
      if (
        /*twitter*/
        ctx2[7].playerWidth
      ) {
        if (if_block6) {
          if_block6.p(ctx2, dirty);
        } else {
          if_block6 = create_if_block_3(ctx2);
          if_block6.c();
          if_block6.m(t7.parentNode, t7);
        }
      } else if (if_block6) {
        if_block6.d(1);
        if_block6 = null;
      }
      if (
        /*twitter*/
        ctx2[7].playerHeight
      ) {
        if (if_block7) {
          if_block7.p(ctx2, dirty);
        } else {
          if_block7 = create_if_block_2(ctx2);
          if_block7.c();
          if_block7.m(if_block7_anchor.parentNode, if_block7_anchor);
        }
      } else if (if_block7) {
        if_block7.d(1);
        if_block7 = null;
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
      if (detaching)
        detach(t0);
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t1);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(t2);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach(t3);
      if (if_block3)
        if_block3.d(detaching);
      if (detaching)
        detach(t4);
      if (if_block4)
        if_block4.d(detaching);
      if (detaching)
        detach(t5);
      if (if_block5)
        if_block5.d(detaching);
      if (detaching)
        detach(t6);
      if (if_block6)
        if_block6.d(detaching);
      if (detaching)
        detach(t7);
      if (if_block7)
        if_block7.d(detaching);
      if (detaching)
        detach(if_block7_anchor);
    }
  };
}
function create_if_block_9(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { name: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "name", "twitter:site");
      attr(meta, "content", meta_content_value = /*twitter*/
      ctx[7].site);
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*twitter*/
      128 && meta_content_value !== (meta_content_value = /*twitter*/
      ctx2[7].site)) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function create_if_block_8(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { name: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "name", "twitter:title");
      attr(meta, "content", meta_content_value = /*twitter*/
      ctx[7].title);
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*twitter*/
      128 && meta_content_value !== (meta_content_value = /*twitter*/
      ctx2[7].title)) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function create_if_block_7(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { name: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "name", "twitter:description");
      attr(meta, "content", meta_content_value = /*twitter*/
      ctx[7].description);
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*twitter*/
      128 && meta_content_value !== (meta_content_value = /*twitter*/
      ctx2[7].description)) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function create_if_block_6(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { name: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "name", "twitter:image");
      attr(meta, "content", meta_content_value = /*twitter*/
      ctx[7].image);
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*twitter*/
      128 && meta_content_value !== (meta_content_value = /*twitter*/
      ctx2[7].image)) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function create_if_block_5(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { name: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "name", "twitter:image:alt");
      attr(meta, "content", meta_content_value = /*twitter*/
      ctx[7].imageAlt);
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*twitter*/
      128 && meta_content_value !== (meta_content_value = /*twitter*/
      ctx2[7].imageAlt)) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function create_if_block_4(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { name: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "name", "twitter:player");
      attr(meta, "content", meta_content_value = /*twitter*/
      ctx[7].player);
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*twitter*/
      128 && meta_content_value !== (meta_content_value = /*twitter*/
      ctx2[7].player)) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function create_if_block_3(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { name: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "name", "twitter:player:width");
      attr(meta, "content", meta_content_value = /*twitter*/
      ctx[7].playerWidth);
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*twitter*/
      128 && meta_content_value !== (meta_content_value = /*twitter*/
      ctx2[7].playerWidth)) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function create_if_block_2(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { name: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "name", "twitter:player:height");
      attr(meta, "content", meta_content_value = /*twitter*/
      ctx[7].playerHeight);
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*twitter*/
      128 && meta_content_value !== (meta_content_value = /*twitter*/
      ctx2[7].playerHeight)) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(meta);
    }
  };
}
function create_if_block$1(ctx) {
  let html_tag;
  let raw_value = `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    .../*jsonLd*/
    ctx[8]
  }) + "<"}/script>`;
  let html_anchor;
  return {
    c() {
      html_tag = new HtmlTagHydration(false);
      html_anchor = empty();
      this.h();
    },
    l(nodes) {
      html_tag = claim_html_tag(nodes, false);
      html_anchor = empty();
      this.h();
    },
    h() {
      html_tag.a = html_anchor;
    },
    m(target, anchor) {
      html_tag.m(raw_value, target, anchor);
      insert_hydration(target, html_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*jsonLd*/
      256 && raw_value !== (raw_value = `<script type="application/ld+json">${JSON.stringify({
        "@context": "https://schema.org",
        .../*jsonLd*/
        ctx2[8]
      }) + "<"}/script>`))
        html_tag.p(raw_value);
    },
    d(detaching) {
      if (detaching)
        detach(html_anchor);
      if (detaching)
        html_tag.d();
    }
  };
}
function create_fragment$1(ctx) {
  let meta0;
  let meta0_content_value;
  let meta1;
  let meta1_content_value;
  let if_block1_anchor;
  let if_block2_anchor;
  let if_block3_anchor;
  let if_block4_anchor;
  let if_block5_anchor;
  let if_block6_anchor;
  let current;
  let if_block0 = (
    /*title*/
    ctx[0] && create_if_block_29(ctx)
  );
  let if_block1 = (
    /*description*/
    ctx[3] && create_if_block_28(ctx)
  );
  let if_block2 = (
    /*canonical*/
    ctx[5] && create_if_block_27(ctx)
  );
  let if_block3 = (
    /*keywords*/
    ctx[4] && create_if_block_26(ctx)
  );
  let if_block4 = (
    /*openGraph*/
    ctx[6] && create_if_block_10(ctx)
  );
  let if_block5 = (
    /*twitter*/
    ctx[7] && create_if_block_1$1(ctx)
  );
  let if_block6 = (
    /*jsonLd*/
    ctx[8] && create_if_block$1(ctx)
  );
  const default_slot_template = (
    /*#slots*/
    ctx[10].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[9],
    null
  );
  return {
    c() {
      if (if_block0)
        if_block0.c();
      meta0 = element("meta");
      meta1 = element("meta");
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
      if (if_block2)
        if_block2.c();
      if_block2_anchor = empty();
      if (if_block3)
        if_block3.c();
      if_block3_anchor = empty();
      if (if_block4)
        if_block4.c();
      if_block4_anchor = empty();
      if (if_block5)
        if_block5.c();
      if_block5_anchor = empty();
      if (if_block6)
        if_block6.c();
      if_block6_anchor = empty();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-1q8xl96", document.head);
      if (if_block0)
        if_block0.l(head_nodes);
      meta0 = claim_element(head_nodes, "META", { name: true, content: true });
      meta1 = claim_element(head_nodes, "META", { name: true, content: true });
      if (if_block1)
        if_block1.l(head_nodes);
      if_block1_anchor = empty();
      if (if_block2)
        if_block2.l(head_nodes);
      if_block2_anchor = empty();
      if (if_block3)
        if_block3.l(head_nodes);
      if_block3_anchor = empty();
      if (if_block4)
        if_block4.l(head_nodes);
      if_block4_anchor = empty();
      if (if_block5)
        if_block5.l(head_nodes);
      if_block5_anchor = empty();
      if (if_block6)
        if_block6.l(head_nodes);
      if_block6_anchor = empty();
      if (default_slot)
        default_slot.l(head_nodes);
      head_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(meta0, "name", "robots");
      attr(meta0, "content", meta0_content_value = `${/*noindex*/
      ctx[1] ? "noindex" : "index"},${/*nofollow*/
      ctx[2] ? "nofollow" : "follow"}`);
      attr(meta1, "name", "googlebot");
      attr(meta1, "content", meta1_content_value = `${/*noindex*/
      ctx[1] ? "noindex" : "index"},${/*nofollow*/
      ctx[2] ? "nofollow" : "follow"}`);
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(document.head, null);
      append_hydration(document.head, meta0);
      append_hydration(document.head, meta1);
      if (if_block1)
        if_block1.m(document.head, null);
      append_hydration(document.head, if_block1_anchor);
      if (if_block2)
        if_block2.m(document.head, null);
      append_hydration(document.head, if_block2_anchor);
      if (if_block3)
        if_block3.m(document.head, null);
      append_hydration(document.head, if_block3_anchor);
      if (if_block4)
        if_block4.m(document.head, null);
      append_hydration(document.head, if_block4_anchor);
      if (if_block5)
        if_block5.m(document.head, null);
      append_hydration(document.head, if_block5_anchor);
      if (if_block6)
        if_block6.m(document.head, null);
      append_hydration(document.head, if_block6_anchor);
      if (default_slot) {
        default_slot.m(document.head, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (
        /*title*/
        ctx2[0]
      ) {
        if (if_block0)
          ;
        else {
          if_block0 = create_if_block_29(ctx2);
          if_block0.c();
          if_block0.m(meta0.parentNode, meta0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (!current || dirty & /*noindex, nofollow*/
      6 && meta0_content_value !== (meta0_content_value = `${/*noindex*/
      ctx2[1] ? "noindex" : "index"},${/*nofollow*/
      ctx2[2] ? "nofollow" : "follow"}`)) {
        attr(meta0, "content", meta0_content_value);
      }
      if (!current || dirty & /*noindex, nofollow*/
      6 && meta1_content_value !== (meta1_content_value = `${/*noindex*/
      ctx2[1] ? "noindex" : "index"},${/*nofollow*/
      ctx2[2] ? "nofollow" : "follow"}`)) {
        attr(meta1, "content", meta1_content_value);
      }
      if (
        /*description*/
        ctx2[3]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_28(ctx2);
          if_block1.c();
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (
        /*canonical*/
        ctx2[5]
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block_27(ctx2);
          if_block2.c();
          if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
      if (
        /*keywords*/
        ctx2[4]
      ) {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
        } else {
          if_block3 = create_if_block_26(ctx2);
          if_block3.c();
          if_block3.m(if_block3_anchor.parentNode, if_block3_anchor);
        }
      } else if (if_block3) {
        if_block3.d(1);
        if_block3 = null;
      }
      if (
        /*openGraph*/
        ctx2[6]
      ) {
        if (if_block4) {
          if_block4.p(ctx2, dirty);
        } else {
          if_block4 = create_if_block_10(ctx2);
          if_block4.c();
          if_block4.m(if_block4_anchor.parentNode, if_block4_anchor);
        }
      } else if (if_block4) {
        if_block4.d(1);
        if_block4 = null;
      }
      if (
        /*twitter*/
        ctx2[7]
      ) {
        if (if_block5) {
          if_block5.p(ctx2, dirty);
        } else {
          if_block5 = create_if_block_1$1(ctx2);
          if_block5.c();
          if_block5.m(if_block5_anchor.parentNode, if_block5_anchor);
        }
      } else if (if_block5) {
        if_block5.d(1);
        if_block5 = null;
      }
      if (
        /*jsonLd*/
        ctx2[8]
      ) {
        if (if_block6) {
          if_block6.p(ctx2, dirty);
        } else {
          if_block6 = create_if_block$1(ctx2);
          if_block6.c();
          if_block6.m(if_block6_anchor.parentNode, if_block6_anchor);
        }
      } else if (if_block6) {
        if_block6.d(1);
        if_block6 = null;
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        512)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[9],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[9]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[9],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      detach(meta0);
      detach(meta1);
      if (if_block1)
        if_block1.d(detaching);
      detach(if_block1_anchor);
      if (if_block2)
        if_block2.d(detaching);
      detach(if_block2_anchor);
      if (if_block3)
        if_block3.d(detaching);
      detach(if_block3_anchor);
      if (if_block4)
        if_block4.d(detaching);
      detach(if_block4_anchor);
      if (if_block5)
        if_block5.d(detaching);
      detach(if_block5_anchor);
      if (if_block6)
        if_block6.d(detaching);
      detach(if_block6_anchor);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { title = void 0 } = $$props;
  let { noindex = false } = $$props;
  let { nofollow = false } = $$props;
  let { description = void 0 } = $$props;
  let { keywords = void 0 } = $$props;
  let { canonical = void 0 } = $$props;
  let { openGraph = void 0 } = $$props;
  let { twitter = void 0 } = $$props;
  let { jsonLd = void 0 } = $$props;
  $$self.$$set = ($$props2) => {
    if ("title" in $$props2)
      $$invalidate(0, title = $$props2.title);
    if ("noindex" in $$props2)
      $$invalidate(1, noindex = $$props2.noindex);
    if ("nofollow" in $$props2)
      $$invalidate(2, nofollow = $$props2.nofollow);
    if ("description" in $$props2)
      $$invalidate(3, description = $$props2.description);
    if ("keywords" in $$props2)
      $$invalidate(4, keywords = $$props2.keywords);
    if ("canonical" in $$props2)
      $$invalidate(5, canonical = $$props2.canonical);
    if ("openGraph" in $$props2)
      $$invalidate(6, openGraph = $$props2.openGraph);
    if ("twitter" in $$props2)
      $$invalidate(7, twitter = $$props2.twitter);
    if ("jsonLd" in $$props2)
      $$invalidate(8, jsonLd = $$props2.jsonLd);
    if ("$$scope" in $$props2)
      $$invalidate(9, $$scope = $$props2.$$scope);
  };
  return [
    title,
    noindex,
    nofollow,
    description,
    keywords,
    canonical,
    openGraph,
    twitter,
    jsonLd,
    $$scope,
    slots
  ];
}
class SvelteSeo extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      title: 0,
      noindex: 1,
      nofollow: 2,
      description: 3,
      keywords: 4,
      canonical: 5,
      openGraph: 6,
      twitter: 7,
      jsonLd: 8
    });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[8] = list[i];
  child_ctx[10] = i;
  return child_ctx;
}
function create_if_block_1(ctx) {
  let div1;
  let p;
  let t0;
  let t1;
  let div0;
  let t2;
  let input;
  let input_placeholder_value;
  let div1_outro;
  let current;
  let mounted;
  let dispose;
  let each_value = (
    /*verify_lines*/
    ctx[0]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div1 = element("div");
      p = element("p");
      t0 = text("Please type the following to continue.");
      t1 = space();
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t2 = space();
      input = element("input");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      p = claim_element(div1_nodes, "P", { class: true });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "Please type the following to continue.");
      p_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      t2 = claim_space(div1_nodes);
      input = claim_element(div1_nodes, "INPUT", {
        type: true,
        id: true,
        autocomplete: true,
        placeholder: true,
        class: true
      });
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "instruction svelte-1gz8sjf");
      attr(div0, "class", "guide-container svelte-1gz8sjf");
      attr(input, "type", "text");
      attr(input, "id", "verify");
      attr(input, "autocomplete", "off");
      attr(input, "placeholder", input_placeholder_value = "Type it here. " + /*verified_index*/
      (ctx[1] + 1) + " out of " + /*verify_lines*/
      ctx[0].length);
      input.autofocus = true;
      attr(input, "class", "svelte-1gz8sjf");
      attr(div1, "class", "animation-wrapper svelte-1gz8sjf");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, p);
      append_hydration(p, t0);
      append_hydration(div1, t1);
      append_hydration(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div0, null);
      }
      append_hydration(div1, t2);
      append_hydration(div1, input);
      set_input_value(
        input,
        /*verified_text*/
        ctx[2]
      );
      current = true;
      input.focus();
      if (!mounted) {
        dispose = [
          listen(input, "paste", paste_handler_1),
          listen(
            input,
            "input",
            /*input_input_handler*/
            ctx[7]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*verified_index, atob, verify_lines*/
      3) {
        each_value = /*verify_lines*/
        ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div0, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      if (!current || dirty & /*verified_index, verify_lines*/
      3 && input_placeholder_value !== (input_placeholder_value = "Type it here. " + /*verified_index*/
      (ctx2[1] + 1) + " out of " + /*verify_lines*/
      ctx2[0].length)) {
        attr(input, "placeholder", input_placeholder_value);
      }
      if (dirty & /*verified_text*/
      4 && input.value !== /*verified_text*/
      ctx2[2]) {
        set_input_value(
          input,
          /*verified_text*/
          ctx2[2]
        );
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      if (div1_outro)
        div1_outro.end(1);
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      div1_outro = create_out_transition(div1, slide, {});
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_each(each_blocks, detaching);
      if (detaching && div1_outro)
        div1_outro.end();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_each_block(ctx) {
  let p;
  let t0_value = atob(
    /*line*/
    ctx[8]
  ) + "";
  let t0;
  let t1;
  let p_intro;
  let p_outro;
  let current;
  let mounted;
  let dispose;
  return {
    c() {
      p = element("p");
      t0 = text(t0_value);
      t1 = space();
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true, style: true });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, t0_value);
      t1 = claim_space(p_nodes);
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "guide svelte-1gz8sjf");
      set_style(
        p,
        "--offset-y",
        /*index*/
        (ctx[10] - /*verified_index*/
        ctx[1]) * -3 + "em"
      );
      set_style(
        p,
        "--color",
        /*verified_index*/
        ctx[1] == /*index*/
        ctx[10] ? "#2acee1" : "#89b4b9"
      );
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t0);
      append_hydration(p, t1);
      current = true;
      if (!mounted) {
        dispose = [
          listen(p, "select", select_handler),
          listen(p, "paste", paste_handler),
          listen(p, "copy", copy_handler)
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if ((!current || dirty & /*verify_lines*/
      1) && t0_value !== (t0_value = atob(
        /*line*/
        ctx2[8]
      ) + ""))
        set_data(t0, t0_value);
      if (!current || dirty & /*verified_index*/
      2) {
        set_style(
          p,
          "--offset-y",
          /*index*/
          (ctx2[10] - /*verified_index*/
          ctx2[1]) * -3 + "em"
        );
      }
      if (!current || dirty & /*verified_index*/
      2) {
        set_style(
          p,
          "--color",
          /*verified_index*/
          ctx2[1] == /*index*/
          ctx2[10] ? "#2acee1" : "#89b4b9"
        );
      }
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (p_outro)
          p_outro.end(1);
        p_intro = create_in_transition(p, fade, {
          duration: 750,
          delay: (
            /*index*/
            ctx[10] * 200
          )
        });
        p_intro.start();
      });
      current = true;
    },
    o(local) {
      if (p_intro)
        p_intro.invalidate();
      p_outro = create_out_transition(p, fade, { duration: 750 });
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(p);
      if (detaching && p_outro)
        p_outro.end();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block(ctx) {
  let div;
  let button;
  let t;
  let div_intro;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      button = element("button");
      t = text("Join");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      button = claim_element(div_nodes, "BUTTON", { id: true, class: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "Join");
      button_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "id", "join-btn");
      attr(button, "class", "svelte-1gz8sjf");
      attr(div, "class", "button-container svelte-1gz8sjf");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, button);
      append_hydration(button, t);
      if (!mounted) {
        dispose = listen(button, "click", function() {
          if (is_function(
            /*loaded*/
            ctx[4] ? openInvite : null
          ))
            /*loaded*/
            (ctx[4] ? openInvite : null).apply(this, arguments);
        });
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    i(local) {
      if (!div_intro) {
        add_render_callback(() => {
          div_intro = create_in_transition(div, slide, {});
          div_intro.start();
        });
      }
    },
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment(ctx) {
  let link;
  let script;
  let script_src_value;
  let t0;
  let svelteseo;
  let t1;
  let main;
  let div;
  let img;
  let img_src_value;
  let t2;
  let h1;
  let t3;
  let t4;
  let t5;
  let t6;
  let t8;
  let p1;
  let t9;
  let t10;
  let current;
  svelteseo = new SvelteSeo({
    props: {
      title: "You've been invited",
      description: "You've been invited to the Hallabois discord server",
      keywords: "Hallabois, discord, invite",
      openGraph: {
        title: "Hallabois",
        description: "You've been invited to the Hallabois discord server",
        type: "website",
        url: "https://hallabois.github.io/invite/",
        images: [
          {
            url: "https://hallabois.github.io/invite/favicon.png",
            width: 512,
            height: 512,
            alt: favicon_alt
          }
        ]
      },
      twitter: {
        card: "summary",
        title: "Hallabois",
        description: "You've been invited to the Hallabois discord server",
        image: "https://hallabois.github.io/invite/favicon.png",
        imageAlt: favicon_alt
      }
    }
  });
  let if_block0 = !/*verified_all*/
  ctx[5] && !/*skip_verify*/
  ctx[3] && create_if_block_1(ctx);
  let if_block1 = (
    /*verified_all*/
    (ctx[5] || /*skip_verify*/
    ctx[3]) && create_if_block(ctx)
  );
  return {
    c() {
      link = element("link");
      script = element("script");
      t0 = space();
      create_component(svelteseo.$$.fragment);
      t1 = space();
      main = element("main");
      div = element("div");
      img = element("img");
      t2 = space();
      h1 = element("h1");
      t3 = text("Join the Hallabois discord");
      t4 = space();
      if (if_block0)
        if_block0.c();
      t5 = space();
      if (if_block1)
        if_block1.c();
      t6 = space();
      t8 = space();
      p1 = element("p");
      t9 = text("Invite v. ");
      t10 = text(
        /*version*/
        ctx[6]
      );
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-prg9wb", document.head);
      link = claim_element(head_nodes, "LINK", { rel: true, type: true, href: true });
      script = claim_element(head_nodes, "SCRIPT", { src: true });
      var script_nodes = children(script);
      script_nodes.forEach(detach);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      claim_component(svelteseo.$$.fragment, nodes);
      t1 = claim_space(nodes);
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      div = claim_element(main_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      img = claim_element(div_nodes, "IMG", { src: true, alt: true, class: true });
      t2 = claim_space(div_nodes);
      h1 = claim_element(div_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t3 = claim_text(h1_nodes, "Join the Hallabois discord");
      h1_nodes.forEach(detach);
      t4 = claim_space(div_nodes);
      if (if_block0)
        if_block0.l(div_nodes);
      t5 = claim_space(div_nodes);
      if (if_block1)
        if_block1.l(div_nodes);
      div_nodes.forEach(detach);
      t6 = claim_space(main_nodes);
      t8 = claim_space(main_nodes);
      p1 = claim_element(main_nodes, "P", { class: true });
      var p1_nodes = children(p1);
      t9 = claim_text(p1_nodes, "Invite v. ");
      t10 = claim_text(
        p1_nodes,
        /*version*/
        ctx[6]
      );
      p1_nodes.forEach(detach);
      main_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(link, "rel", "icon");
      attr(link, "type", "image/png");
      attr(link, "href", base + "/favicon.png");
      script.async = true;
      script.defer = true;
      if (!src_url_equal(script.src, script_src_value = "https://scripts.simpleanalyticscdn.com/latest.js"))
        attr(script, "src", script_src_value);
      if (!src_url_equal(img.src, img_src_value = base + "/favicon.png"))
        attr(img, "src", img_src_value);
      attr(img, "alt", favicon_alt);
      attr(img, "class", "svelte-1gz8sjf");
      attr(h1, "class", "svelte-1gz8sjf");
      attr(div, "class", "card svelte-1gz8sjf");
      toggle_class(
        div,
        "ready",
        /*loaded*/
        ctx[4]
      );
      attr(p1, "class", "info svelte-1gz8sjf");
      attr(main, "class", "svelte-1gz8sjf");
    },
    m(target, anchor) {
      append_hydration(document.head, link);
      append_hydration(document.head, script);
      insert_hydration(target, t0, anchor);
      mount_component(svelteseo, target, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, main, anchor);
      append_hydration(main, div);
      append_hydration(div, img);
      append_hydration(div, t2);
      append_hydration(div, h1);
      append_hydration(h1, t3);
      append_hydration(div, t4);
      if (if_block0)
        if_block0.m(div, null);
      append_hydration(div, t5);
      if (if_block1)
        if_block1.m(div, null);
      append_hydration(main, t6);
      append_hydration(main, t8);
      append_hydration(main, p1);
      append_hydration(p1, t9);
      append_hydration(p1, t10);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (!/*verified_all*/
      ctx2[5] && !/*skip_verify*/
      ctx2[3]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*verified_all, skip_verify*/
          40) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div, t5);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*verified_all*/
        ctx2[5] || /*skip_verify*/
        ctx2[3]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*verified_all, skip_verify*/
          40) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (!current || dirty & /*loaded*/
      16) {
        toggle_class(
          div,
          "ready",
          /*loaded*/
          ctx2[4]
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(svelteseo.$$.fragment, local);
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(svelteseo.$$.fragment, local);
      transition_out(if_block0);
      current = false;
    },
    d(detaching) {
      detach(link);
      detach(script);
      if (detaching)
        detach(t0);
      destroy_component(svelteseo, detaching);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(main);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
    }
  };
}
let favicon_alt = "A man in a suit wearing welding goggles and an orange hard hat";
let no = "LWFobw==";
function openInvite() {
  try {
    sa_event("click_join");
  } catch (e) {
  }
  window.location.href = atob("aHR0cHM6Ly9kaXNjb3JkLmdnL0JNRVdXcHJZYk4=");
}
const select_handler = () => {
  return false;
};
const paste_handler = () => {
  return false;
};
const copy_handler = () => {
  return false;
};
const paste_handler_1 = () => {
  return false;
};
function instance($$self, $$props, $$invalidate) {
  let version = "1.3.0";
  let skip_verify = false;
  let loaded = false;
  onMount(() => {
    console.clear();
    console.info("© Hallabois 2022");
    if (window.location.href.includes("challenge")) {
      $$invalidate(0, verify_lines = [
        "SXPkIG1laWTkbiwgam9rYSBvbGV0IGthbnNsaWFzc2Eu",
        "UHloaXRldHR5IG9sa29vbiBzaW51biBuaW1lc2ku",
        "VHVsa29vbiBzaW51biBBQkMtbGFhamVubnVrc2VzaS4=",
        "VGFwYWh0dWtvb24gc2ludW4gdGFodG9zaSw=",
        "bXn2cyBLLWx1b2tpc3NhIG5paW4ga3VpbiBSZWRpc3PkLg==",
        "QW5uYSBtZWlsbGUgdORu5CBw5Gl25G7kIG1laWTkbiBqb2thcORpduRpbmVuIG9wcGltbWUu",
        "SmEgYW5uYSBtZWlsbGUgbWVpZORuIHBvaXNzYW9sb21tZSBhbnRlZWtzaSw=",
        "bmlpbiBrdWluIG1la2luIGFudGVla3NpIGFubmFtbWUgbmlpbGxlLA==",
        "am90a2Egb3ZhdCBtZWl05CB2YXN0YWFuIHJpa2tvbmVldC4=",
        "xGzka+Qgc2FhdGEgbWVpdOQgcHJva3Jhc3Rpbm9pbWlzZWVuLA==",
        "dmFhbiBw5ORzdOQgbWVpZOR0IGt1cnNzaXN0YSBs5HBpLg==",
        "U2lsbOQgc2ludW4gb24gdmFsdGFrdW50YSBqYSB2b2ltYSBqYSBrdW5uaWEgaWFua2Fpa2tpc2VzdGkuIEFhbWVuLg=="
      ]);
    }
    $$invalidate(4, loaded = true);
  });
  let verify_lines = ["a+R5dORuIGrkcmtl5G5p"];
  let verified_all = false;
  let verified_index = 0;
  let verified_text = "";
  function input_input_handler() {
    verified_text = this.value;
    $$invalidate(2, verified_text), $$invalidate(0, verify_lines), $$invalidate(1, verified_index);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*verified_text, verify_lines, verified_index*/
    7) {
      if (verified_text.toLowerCase() == atob(verify_lines[verified_index]).toLowerCase()) {
        $$invalidate(1, verified_index++, verified_index);
        $$invalidate(2, verified_text = "");
        try {
          sa_event("step" + verified_index);
        } catch (e) {
        }
      }
    }
    if ($$self.$$.dirty & /*verified_index, verify_lines*/
    3) {
      $$invalidate(5, verified_all = verified_index == verify_lines.length);
    }
    if ($$self.$$.dirty & /*verified_text*/
    4) {
      if (verified_text.includes(atob(no))) {
        $$invalidate(2, verified_text = atob("TGF1cmkgSGFsbGEu"));
        alert("Ei.");
      }
    }
  };
  return [
    verify_lines,
    verified_index,
    verified_text,
    skip_verify,
    loaded,
    verified_all,
    version,
    input_input_handler
  ];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
