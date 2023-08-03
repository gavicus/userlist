
import "./detail-panel.css";

interface ListEntry {
    name: string;
    image?: string;
    description?: string;
    link?: string;
}

interface DetailPanelAttrs {
    title: string;
    entries?: ListEntry[];
}

function DetailPanel({title, entries}: DetailPanelAttrs) {
    return (
        <div className="info-panel">
            { title && <div>{title}</div> }
            { entries && 
                entries.map(e => (
                    e.link
                    ? <a key={e.name} className="ud-small-listing" href={e.link}><EntryLine entry={e} /></a>
                    : <div key={e.name} className="ud-small-listing"><EntryLine entry={e} /></div>
                ))
            }

        </div>
    );
}

function EntryLine({entry}: {entry: ListEntry}) {
    return (
        <>
            { entry.image && <img className="ud-mini-avatar" src={entry.image} alt="small avatar" /> }
            <div className="ud-listing-name">
                {entry.name}
            </div>
            { entry.description && <div className="ud-listing-description">{entry.description}</div> }
        </>
    );
}

export default DetailPanel;