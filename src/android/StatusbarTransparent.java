package net.unbuensitio.statusbar.color.emui;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;

import android.os.Build.VERSION;
import android.os.Build.VERSION_CODES;
import android.graphics.Color;
import android.view.Window;
import android.view.WindowManager.LayoutParams;
import android.view.WindowManager;

public class StatusbarTransparent extends CordovaPlugin {

	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callback) throws JSONException {
		// grab the correct methods
		if(action.equalsIgnoreCase("enable")) {
			if(VERSION.SDK_INT >= VERSION_CODES.KITKAT) {
				cordova.getActivity().runOnUiThread( new Runnable() {
					public void run() {
						//cordova.getActivity().getWindow().addFlags(LayoutParams.FLAG_TRANSLUCENT_STATUS);
						/*int color = Color.parseColor(preferences.getString("StatusBarBackgroundColor", "#4CAF50"));
						Window window = cordova.getActivity().getWindow();
						window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
						window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
						window.setStatusBarColor(color);*/
						Window window = cordova.getActivity().getWindow();
						window.clearFlags(WindowManager.LayoutParams.FLAG_FORCE_NOT_FULLSCREEN);
						setStatusBarBackgroundColor(preferences.getString("StatusBarBackgroundColor", "#4CAF50"));
					}
				});
				callback.success();
			} else {
				callback.error("not supported");
			}
			return true;
		} else if(action.equalsIgnoreCase("disable")) {
			if(VERSION.SDK_INT >= VERSION_CODES.KITKAT) {
				cordova.getActivity().runOnUiThread( new Runnable() {
					public void run() {
						cordova.getActivity().getWindow().clearFlags(LayoutParams.FLAG_TRANSLUCENT_STATUS);
					}
				});
				callback.success();
			} else {
				callback.error("not supported");
			}
			return true;
		} else {
			callback.error("Unknown Action: " + action);
			return false;
		}
	}
	
	private void setStatusBarBackgroundColor(final String colorPref) {
		if (Build.VERSION.SDK_INT >= 21) {
		    if (colorPref != null && !colorPref.isEmpty()) {
			final Window window = cordova.getActivity().getWindow();
			// Method and constants not available on all SDKs but we want to be able to compile this code with any SDK
			window.clearFlags(0x04000000); // SDK 19: WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
			window.addFlags(0x80000000); // SDK 21: WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
			try {
			    // Using reflection makes sure any 5.0+ device will work without having to compile with SDK level 21
			    window.getClass().getDeclaredMethod("setStatusBarColor", int.class).invoke(window, Color.parseColor(colorPref));
			} catch (IllegalArgumentException ignore) {
			    LOG.e(TAG, "Invalid hexString argument, use f.i. '#999999'");
			} catch (Exception ignore) {
			    // this should not happen, only in case Android removes this method in a version > 21
			    LOG.w(TAG, "Method window.setStatusBarColor not found for SDK level " + Build.VERSION.SDK_INT);
			}
		    }
		}
	}
}
