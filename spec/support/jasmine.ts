
// Copyright (C) 2020 Norman Breau <norman@nbsolutions.ca>

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import Jasmine = require('jasmine');
import {SpecReporter} from 'jasmine-spec-reporter';

let jasmine = new Jasmine(null);

let spec: string = process.argv[2] ? process.argv[2] : '**/*[sS]pec.ts';

let config: any = {
    spec_dir: 'spec',
    spec_files: [ '!**/node_modules/**', spec ],
    random: false,
    stopSpecOnExpectationFailure: false
};

jasmine.env.clearReporters();
jasmine.addReporter(<any>(new SpecReporter()));

jasmine.loadConfig(config);

jasmine.execute();
