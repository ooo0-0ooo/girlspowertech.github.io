
import React, { useState } from 'react';

import "./style.scss"

type ArticleSkeletonProps = {
  lines?: number;
}

const ArticleSkeleton: React.FC<ArticleSkeletonProps> = ({ lines = 4 }) => {

  return (
    <div className="skeleton">
      { Array.from({ length: lines }).map((_, index) => (
        <div key={ index } className="line"></div>
      )) }

    </div>
  );
}

export {
  ArticleSkeleton
}