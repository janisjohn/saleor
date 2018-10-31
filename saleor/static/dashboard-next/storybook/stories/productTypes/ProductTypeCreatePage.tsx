import { storiesOf } from "@storybook/react";
import * as React from "react";

import ProductTypeCreatePage from "../../../productTypes/components/ProductTypeCreatePage";
import { WeightUnitsEnum } from "../../../types/globalTypes";
import Decorator from "../../Decorator";

const props = {
  defaultWeightUnit: "kg" as WeightUnitsEnum,
  disabled: false,
  errors: [],
  onBack: () => undefined,
  onDelete: () => undefined,
  onSubmit: () => undefined,
  pageTitle: "Create product type",
  saveButtonBarState: "default"
};

storiesOf("Views / Product types / Create product type", module)
  .addDecorator(Decorator)
  .add("default", () => <ProductTypeCreatePage {...props} />)
  .add("loading", () => (
    <ProductTypeCreatePage {...props} disabled={true} pageTitle={undefined} />
  ));
