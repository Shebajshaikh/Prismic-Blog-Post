import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PostLice`.
 */
export type PostLiceProps = SliceComponentProps<Content.PostLiceSlice>;

/**
 * Component for "PostLice" Slices.
 */
const PostLice = ({ slice }: PostLiceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for post_lice (variation: {slice.variation}) Slices
    </section>
  );
};

export default PostLice;
