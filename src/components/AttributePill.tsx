
import React from 'react';
import { cn } from '@/lib/utils';
import { Attribute } from '@/utils/productData';

interface AttributePillProps {
  attribute: Attribute;
  isActive?: boolean;
  onClick: (attributeId: string) => void;
}

const AttributePill: React.FC<AttributePillProps> = ({ 
  attribute, 
  isActive = false, 
  onClick 
}) => {
  return (
    <button
      className={cn(
        'attribute-pill animate-fade-in-up group',
        isActive && 'attribute-pill-active border-2'
      )}
      onClick={() => onClick(attribute.id)}
      style={{ animationDelay: `${Math.random() * 0.3}s` }}
    >
      <div className="attribute-pill-icon flex items-center justify-center">
        {attribute.icon}
      </div>
      <span className="text-sm font-medium whitespace-nowrap">
        {attribute.name}
      </span>
    </button>
  );
};

export default AttributePill;
