'use client';

import { InfoCircledIcon } from '@radix-ui/react-icons';
import { Callout } from '@radix-ui/themes';

const InfoBar = () => {
  return (
    <Callout.Root variant='surface' color='amber' size='1' role='note'>
      <Callout.Icon>
        <InfoCircledIcon />
      </Callout.Icon>
      <Callout.Text>
        Information refreshes every 60 minutes, data may not reflect in
        real-time updates
      </Callout.Text>
    </Callout.Root>
  );
};

export default InfoBar;
