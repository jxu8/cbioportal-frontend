import {getGenomeNexusApiUrl} from "./urls";
import GenomeNexusAPIInternal from "./generated/GenomeNexusAPIInternal";

const client = new GenomeNexusAPIInternal("https://genomenexus.cbioportal.review");

export default client;
