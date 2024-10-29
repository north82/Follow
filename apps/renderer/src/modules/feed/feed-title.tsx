import type { FeedOrListRespModel } from "@follow/models/types"
import { cn } from "@follow/utils/utils"

import { BoostCertification } from "~/modules/boost/boost-certification"
import { FeedCertification } from "~/modules/feed/feed-certification"
import { getPreferredTitle } from "~/store/feed/store"

export const FeedTitle = ({
  feed,
  className,
}: {
  feed: FeedOrListRespModel
  className?: string
}) => {
  return (
    <div className={cn("flex items-center truncate", className)}>
      <div className="truncate">11{getPreferredTitle(feed)}</div>
      <FeedCertification feed={feed} />
      <BoostCertification feed={feed} />
    </div>
  )
}
