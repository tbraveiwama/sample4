import { Octokit, App } from "https://esm.sh/octokit";

export default function Push(){
const octokit = new Octokit({
  auth: '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'
})

async function push(){
await octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', {
  owner: 'tbraveiwama',
  repo: 'sample4',
  workflow_id: 'publish.yml',
  ref: 'master',
  headers: {
    'X-GitHub-Api-Version': '2026-03-10'
  }
})
}

return(
    <>
    <button type="button" onClick={push}>プッシュする</button>
    </>
)
    
}