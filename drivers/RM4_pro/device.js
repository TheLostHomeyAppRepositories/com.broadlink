/**
 * Driver for Broadlink devices
 *
 * Copyright 2018-2019, R Wensveen
 *
 * This file is part of com.broadlink
 * com.broadlink is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * com.broadlink is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with com.broadlink.  If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

const RmProDevice = require('./../RM_pro/device');
const DataStore = require('./../../lib/DataStore.js')


class RM4ProDevice extends RmProDevice {

	async onInit(dev) {
		await super.onInit(dev);

		this.homey.drivers.getDriver("RM4_pro")
			.ready(() => {
				this._utils.debugLog('RM4ProDevice: onInit: driver ready');
				// if the driver has a CheckInterval, set it. otherwise ignore it.
				let ci = this.getSetting('CheckInterval');
				if (ci) {
					this._utils.debugLog('RM4ProDevice: onInit: start_check_interval');
					this.start_check_interval(ci);
				}
			})
	}

}

module.exports = RM4ProDevice;
