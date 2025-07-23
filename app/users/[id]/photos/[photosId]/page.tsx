import React from 'react'

// mistake is that i only passed the id of the current directory
// the root id should be passed down until the end of the descendants
// no need to create another file of the parent directory since we are only rendering the dynamic parameters of the page
// props should be the same as name of the folder in order to work the current props
interface Props {
    params: { id: number, photosId: number }
}

const NewUserDetailPageId = ({ params: { id, photosId } }: Props) => {
    return (
        <div>
            User Photo Page {id} {photosId}
        </div>
    )
}

export default NewUserDetailPageId
