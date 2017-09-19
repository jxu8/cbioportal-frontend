import * as React from "react";
import * as _ from 'lodash';
import {computed, observable} from "mobx";
import {observer} from "mobx-react";
import { MSKTabs, MSKTab } from "shared/components/MSKTabs/MSKTabs";
import {If, Then, Else} from 'react-if';
import {ThreeBounce} from 'better-react-spinkit';
import {CancerSummaryContent} from './CancerSummaryContent';

@observer
export default class CancerSummaryContainer extends React.Component<{},{}> {

    private data = {
        EGFR: {
            MixedCancerTypes: {
                mutated: 41,
                amplified: 75,
                deleted: 76,
                multiple: 11,
                total: 581
            },
            LungCancer: {
                mutated: 41,
                amplified: 54,
                deleted: 36,
                multiple: 71,
                total: 681
            },
            BrainCancer: {
                mutated: 91,
                amplified: 154,
                deleted: 56,
                multiple: 331,
                total: 639
            },
        },
        BRCA1: {
            MixedCancerTypes: {
                mutated: 41,
                amplified: 75,
                deleted: 6,
                multiple: 11,
                total: 881
            },
            LungCancer: {
                mutated: 11,
                amplified: 54,
                deleted: 16,
                multiple: 71,
                total: 581
            }
        }
    };
    @observable private activeTab = Object.keys(this.data)[0];

    constructor() {
        super();

        this.handleTabClick = this.handleTabClick.bind(this);
    }

    private handleTabClick(id: string) {
        this.activeTab = id;
    }

    @computed
    private get tabs() {
        return _.map(this.data, (geneData, geneName) => (
            <MSKTab key={geneName} id={"summaryTab" + geneName} linkText={geneName}>
                <CancerSummaryContent data={geneData}/>
            </MSKTab>
        ));
    }

    public render() {
        return (
            <div>
                <If condition={true}>
                    <Then>
                        <MSKTabs onTabClick={this.handleTabClick}
                                 activeTabId={this.activeTab} className="mainTabs">
                            {this.tabs}
                        </MSKTabs>
                    </Then>
                    <Else>
                        <ThreeBounce size={20} className="center-block text-center"/>
                    </Else>
                </If>
            </div>
        );
    }
};