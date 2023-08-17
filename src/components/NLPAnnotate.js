import React from 'react'
import NLPAnnotator from "react-nlp-annotate";

function NLPAnnotate({documentText}) {

    const labels = [
        {
            id: "gryffindor",
            displayName: "Gryffindor",
            description: "Daring, strong nerve and chivalry."
        },
        {
            id: "slytherin",
            displayName: "Slytherin",
            description: "Cunning and ambitious. Possibly dark wizard."
        }
    ]

    return (
        <div>
            <NLPAnnotator
                hotkeysEnabled
                // Try changing to any of these!
                // type="label-document"
                // type="label-sequence"
                type="label-relationships"
                labels={labels}
                multipleLabels={false}
                document={documentText}
                onChange={(output) => {
                    console.log("Output is...", output);
                }}
                // this is just for label-relationships
                entityLabels={labels}
                relationshipLabels={labels}
            />
        </div>
    )
}

export default NLPAnnotate