// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';

import { PrivateIconProps } from '../../base';
import { useUniqueId } from '../../utils';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({
  svgRef,
  title = 'CA flag',
  theme,
  ...props
}) => {
  const uniqueTitleId = useUniqueId('icon');
  const titleId = title ? props.titleId || uniqueTitleId : undefined;
  const ariaHidden = titleId ? undefined : true;

  return (
    <svg
      aria-hidden={ariaHidden}
      aria-labelledby={titleId}
      ref={svgRef}
      viewBox="0 0 640 480"
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M150.131 0h339.656v480H150.132z" fill="#fff" />
      <path
        d="M-19.65 0h169.781v480H-19.65zm509.438 0h169.78v480H489.882zm-288.75 231.938l-13.313 4.5 61.406 53.906c4.688 13.781-1.593 17.812-5.625 25.125l66.563-8.438-1.594 67.031 13.875-.375-3.094-66.562 66.75 7.969c-4.125-8.719-7.781-13.313-4.031-27.188l61.313-51.094-10.688-3.937c-8.813-6.75 3.75-32.531 5.625-48.844 0 0-35.719 12.281-38.063 5.813l-9.187-17.532-32.531 35.813c-3.563.844-5.063-.563-5.906-3.563l15-74.812-23.813 13.406c-1.969.938-3.938.188-5.25-2.156l-22.969-45.938-23.625 47.72c-1.781 1.687-3.562 1.874-5.062.75l-22.688-12.75 13.688 74.155c-1.125 3-3.75 3.75-6.75 2.157L239.85 171.75c-4.031 6.562-6.75 17.156-12.187 19.594-5.344 2.25-23.438-4.5-35.532-7.125 4.125 14.906 17.063 39.656 8.907 47.812z"
        fill="#d52b1e"
      />
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const CAFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef));

CAFlagIcon.displayName = 'CAFlagIcon';
