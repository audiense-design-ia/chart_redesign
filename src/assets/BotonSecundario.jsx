import React from "react";
import { cn } from "../utils/cn";

const BotonSecundario = ({ className, children, ...rest }) => {
  
        return (
          <button
            variant="ghost"
            className={cn(
              "bg-[#E8F3FE] text-blue-600 hover:bg-[#C5DCFD] hover:text-blue-700 rounded-md font-medium",
              "h-[38px] rounded-lg px-4 py-2",
              className
            )}
            {...rest}
          >
            {children}
          </button>
        );
      }
      
export default BotonSecundario;


